import { createContext, useEffect, useState } from "react";
import { collection, getDocs, doc, query, where, setDoc, deleteDoc, updateDoc } from 'firebase/firestore';
import {auth, db} from '../firebaseConfig';
import { nanoid } from 'nanoid';

const firestoreContext = createContext();

const FirestoreProvider = ({children}) => {

    const [dataProjects, setDataProjects] = useState([]);
    const [error, setError] = useState();
    const [loading, setLoading] = useState({});
    
    const getProjects = async() => {
        try {
            setLoading(prev => ({...prev, getProjects: true}))
            const projectsRef = collection(db, "Projects");
            const q = query(projectsRef, where("uid", "==", auth.currentUser.uid)); 
            const querySnapshot = await getDocs(q);
            const projectsDB = querySnapshot.docs.map(doc => (doc.data()));
            setDataProjects(projectsDB);
        } catch (error) {
            console.log(error);
            setError(error.message);
        } finally {
            setLoading(prev => ({...prev, getProjects: false}));
        }
    }

    const addProject = async(project, color, icon, area) => {
        try {
            setLoading(prev => ({...prev, add: true}));
            const newProject = {
                project: project,
                color: color,
                icon: icon,
                area: area,
                uid: auth.currentUser.uid,
                idpro: nanoid()
            }
            const projectRef = doc(db, 'Projects', newProject.idpro);
            await setDoc(projectRef, newProject)
            setDataProjects([...dataProjects, newProject])
        } catch (error) {
            console.log(error);
            setError(error.message);
        } finally {
            setLoading(prev => ({...prev, add: false}));
        }
    }

    const deleteProject = async(idpro) => {
        try {
            setLoading(prev => ({...prev, [idpro]: true, type: 'delete'}));
            const projectRef = doc(db, 'Projects', idpro);
            await deleteDoc(projectRef);
            setDataProjects(dataProjects.filter(item => item.idpro !== idpro));
        } catch (error) {
            console.log(error);
            setError(error.message);
        } finally {
            setLoading(prev => ({...prev, [idpro]: false, type: 'delete'}));
        }
    }

    const updateProject = async(idpro, projectUpd) => {
        try {
            setLoading(prev => ({...prev, [idpro]: true, type: 'update'}));
            const projectRef = doc(db, 'Projects', idpro);
            await updateDoc(projectRef, {project: projectUpd});
            setDataProjects(dataProjects.map(item => item.idpro === idpro ? ({...item, project: projectUpd}) : item))
        } catch (error) {
            console.log(error);
            setError(error.message);
        } finally {
            setLoading(prev => ({...prev, [idpro]: false, type: 'update'}));
        }
    }

    return (
        <firestoreContext.Provider value={{dataProjects, setDataProjects, error, loading, getProjects, addProject, deleteProject, updateProject}}>
            {children}
        </firestoreContext.Provider>
    )
}

export { FirestoreProvider, firestoreContext };