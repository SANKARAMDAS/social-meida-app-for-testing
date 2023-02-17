import {getDocs, collection,} from 'firebase/firestore'
import {db} from '../../config/firebase'
import {useEffect, useState} from "react";
import {Post} from "./post";

export interface Post {
    id: string;
    userId: string;
    title: string;
    username: string;
    description: string;
}
export const Main = () => {
    const [postlist, setPostlist] = useState<Post[] | null>(null);
    const postsRef = collection(db, 'posts');
    const getPosts = async () => {
      const data = await getDocs(postsRef);
        setPostlist(data.docs.map((doc) => ({...doc.data(), id: doc.id})) as Post[]);
    };
    getPosts();

    useEffect(() => {
        return () => {
            getPosts();
        };
    }, []);

  return (
      <div>
          {postlist?.map((post) => (<Post post={post}/>))}
      </div>
  )
}