import { useState } from 'react';
import { collection, getDocs, doc, query, where } from 'firebase/firestore';
import {auth, db} from '../firebaseConfig'

export const useFirestore = () => {

    const [dataProjects, setDataProjects] = useState([]);
    const [error, setError] = useState();
    const [loading, setLoading] = useState({});
    
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
 
    return {dataProjects, error, loading, getProjects};
}