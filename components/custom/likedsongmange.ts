import React, { useContext } from 'react';
import { UserContext } from '../context';  // Adjust the import path as necessary
import { useSession } from 'next-auth/react';
import { Track, user } from '@/types/type';

export function UseUserSongManagement() {
    const { users, setUsers } = useContext(UserContext) || {};
    const {data:session}=useSession()

    const handleAdd = (e:React.MouseEvent, item:Track) => {
        const email = session?.user?.email;
        e.stopPropagation();
        if (setUsers && email) {
            setUsers(prevs => {
                const index = prevs.findIndex(prev => prev.email === email);
                if (index !== -1) {
                    const currentUser = prevs[index];
                    const songAlreadyLiked = currentUser.likedsong.some(song => song.id === item.id);
                    if (!songAlreadyLiked) {
                        const newUser = {
                            ...currentUser,
                            likedsong: [...currentUser.likedsong, item]
                        };
                        const newUsers = [
                            ...prevs.slice(0, index),
                            newUser,
                            ...prevs.slice(index + 1)
                        ];
                        console.log(newUsers);
                        localStorage.setItem("users", JSON.stringify(newUsers));
                        return newUsers;
                    } else {
                        alert("Song already added");
                    }
                }
                return prevs;
            });
        }
    };

    const handleRemove = (e:React.MouseEvent, item:Track) => {
        const email = session?.user?.email;
        e.stopPropagation();
        if (setUsers && email) {
            setUsers(prevs => {
                const index = prevs.findIndex(prev => prev.email === email);
                if (index !== -1) {
                    const currentUser = prevs[index];
                    const newLikedSongs = currentUser.likedsong.filter(song => song.id !== item.id);
                    if (newLikedSongs.length !== currentUser.likedsong.length) {
                        const newUser = {
                            ...currentUser,
                            likedsong: newLikedSongs
                        };
                        const newUsers = [
                            ...prevs.slice(0, index),
                            newUser,
                            ...prevs.slice(index + 1)
                        ];
                        console.log(newUsers);
                        localStorage.setItem("users", JSON.stringify(newUsers));
                        return newUsers;
                    } else {
                        alert("Song not found in liked songs");
                    }
                }
                return prevs;
            });
        }
    };

    return { handleAdd, handleRemove };
}
