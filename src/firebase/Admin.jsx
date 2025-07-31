import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/firebase';
import MediaUploader from '../components/MediaUploader';
import { Navigate } from 'react-router-dom';

export default function Admin() {
  const 