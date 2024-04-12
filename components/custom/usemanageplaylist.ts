// import { useContext } from 'react';
// import { UserContext } from '../context/userscontext';  // Adjust the import path as necessary
// import { useSession } from 'next-auth/react';
// import { playlist } from '@/types/type';

// export function UsePlaylistManagement() {
//     const { users, setUsers } = useContext(UserContext) || {};
//     const {data:session}=useSession()

//     const handleAddPlaylist = ( playlist:playlist) => {
//         const email = session?.user?.email;  // Assuming 'session' is globally available or passed somehow
//         // e.stopPropagation();
//         if (setUsers && email) {
//             setUsers(prevs => {
//                 const index = prevs.findIndex(prev => prev.email === email);
//                 if (index !== -1) {
//                     const currentUser = prevs[index];
//                     const playlistAlreadyExists = currentUser.playlist.some(p => p.id === playlist.id);
//                     if (!playlistAlreadyExists) {
//                         const newUser = {
//                             ...currentUser,
//                             playlist: [...currentUser.playlist, playlist]
//                         };
//                         const newUsers = [
//                             ...prevs.slice(0, index),
//                             newUser,
//                             ...prevs.slice(index + 1)
//                         ];
//                         console.log(newUsers);
//                         localStorage.setItem("users", JSON.stringify(newUsers));
//                         return newUsers;
//                     } else {
//                         alert("Playlist already added");
//                     }
//                 }
//                 return prevs;
//             });
//         }
//     };

//     const handleRemovePlaylist = (e:MouseEvent, playlistId:string) => {
//         const email = session?.user?.email;
//         e.stopPropagation();
//         if (setUsers && email) {
//             setUsers(prevs => {
//                 const index = prevs.findIndex(prev => prev.email === email);
//                 if (index !== -1) {
//                     const currentUser = prevs[index];
//                     const newPlaylists = currentUser.playlist.filter(p => p.id !== playlistId);
//                     if (newPlaylists.length !== currentUser.playlist.length) {
//                         const newUser = {
//                             ...currentUser,
//                             playlists: newPlaylists
//                         };
//                         const newUsers = [
//                             ...prevs.slice(0, index),
//                             newUser,
//                             ...prevs.slice(index + 1)
//                         ];
//                         console.log(newUsers);
//                         localStorage.setItem("users", JSON.stringify(newUsers));
//                         return newUsers;
//                     } else {
//                         alert("Playlist not found");
//                     }
//                 }
//                 return prevs;
//             });
//         }
//     };

//     return { handleAddPlaylist, handleRemovePlaylist };
// }
import { useContext } from 'react';
import { UserContext } from '../context/userscontext';
import { useSession } from 'next-auth/react';
import { playlist } from '@/types/type'; // Adjust the import path for Playlist type

export function UsePlaylistManagement() {
    const { users, setUsers } = useContext(UserContext)||{};
    const { data: session } = useSession();

    const handleAddPlaylist = (playlist: playlist) => {
        const email = session?.user?.email;
        if (setUsers && email && users) {
            setUsers(prevs => {
                const index = prevs.findIndex(prev => prev.email === email);
                if (index !== -1) {
                    const currentUser = prevs[index];
                    if (!currentUser.playlist.some(p => p.id === playlist.id)) {
                        const newUser = {
                            ...currentUser,
                            playlist: [...currentUser.playlist, playlist]
                        };
                        const newUsers = [...prevs.slice(0, index), newUser, ...prevs.slice(index + 1)];
                        console.log("Updating users:", newUsers);
                        localStorage.setItem("users", JSON.stringify(newUsers));
                        return newUsers;
                    } else {
                        alert("Playlist already added");
                    }
                }
                return prevs;
            });
        }
    };

    const handleRemovePlaylist = (playlistId: string) => {
        const email = session?.user?.email;
        if (setUsers && email && users) {
            setUsers(prevs => {
                const index = prevs.findIndex(prev => prev.email === email);
                if (index !== -1) {
                    const currentUser = prevs[index];
                    const newPlaylists = currentUser.playlist.filter(p => p.id !== playlistId);
                    if (newPlaylists.length !== currentUser.playlist.length) {
                        const newUser = {
                            ...currentUser,
                            playlists: newPlaylists
                        };
                        const newUsers = [...prevs.slice(0, index), newUser, ...prevs.slice(index + 1)];
                        console.log("Removing playlist:", newUsers);
                        localStorage.setItem("users", JSON.stringify(newUsers));
                        return newUsers;
                    } else {
                        alert("Playlist not found");
                    }
                }
                return prevs;
            });
        }
    };

    return { handleAddPlaylist, handleRemovePlaylist };
}
