import { useEffect, useState } from 'react';
import { collection, getDocs, doc, query, where, addDoc } from 'firebase/firestore';
import {auth, db} from '../firebaseConfig'

export const useFirestore = () => {

    const [dataProjects, setDataProjects] = useState([]);
    const [error, setError] = useState();
    const [loading, setLoading] = useState({});

    useEffect(() => {
        getProjects();
        console.log('consultando datos')
    }, []);

    
    const getProjects = async() => {
        try {
            setLoading(prev => ({...prev, getProjects: true}))
            const projectsRef = collection(db, 'Projects');
            const q = query(projectsRef, where('uid', '==', auth.currentUser.uid)); 
            const querySnapshot = await getDocs(q);
            const projectsDB = querySnapshot.docs.map(doc => (doc.data()));
            setDataProjects(projectsDB);
        } catch (error) {
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
                uid: auth.currentUser.uid
            }
            const projectRef = collection(db, 'Projects');
            await addDoc(projectRef, newProject)
            setDataProjects([...dataProjects, newProject])
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(prev => ({...prev, add: false}));
        }
    }
 
    return {dataProjects, error, setError, loading, addProject};
}