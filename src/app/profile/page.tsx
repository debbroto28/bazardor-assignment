'use client'

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { CornerDownLeft } from "lucide-react";

import { useRouter } from "next/navigation";

const ProfilePage = () => {
    const { data: session } = authClient.useSession()
        const user = session?.user
        const handleSignout = async () => {
    await authClient.signOut({
        fetchOptions: {
            onSuccess: () => {
                router.push("/");
            },
        },
    });
};

      const router = useRouter();  
      const updateName = async ( e:React.SubmitEvent<HTMLElement>) => {
        e.preventDefault()
        const fromData = new FormData(e.target)
        const newUserData = Object.fromEntries(fromData.entries()) as {name: string}
         
        await authClient.updateUser ({
            ...updateName
        })
    }
      
    return (
        <div className = 'container mx-auto mt-10'>
            <h2 className="text-3xl font-extrabold">আমার প্রোফাইল</h2>
            <p className="text-gray-500 mt-2">আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।</p>
           
           <div className =' flex items-center justify-between mt-10  border rounded-2xl p-6 border-gray-200 bg-white '>

            <div className='flex items-center  gap-5 '>
                   <Link href={'/profile'}>
                       <div className="avatar">
                        <div className="w-18 rounded">
                            <img
                                src={user?.image as string}
                                alt=""
                                />
                        </div>
                    </div>
                   
                   </Link>
                   <div>
                    <h2> {user?.name}</h2>
                    <h2>{user?.email}</h2>
                   </div>
                    
            </div>
            <button onClick={handleSignout} className='btn border-red-800 bg-white text-red-900' > 
                
               <CornerDownLeft size={18} strokeWidth={1.8} />
                 সাইন আউট
                 
                 </button>
            </div>

            <form className="mt-8" onSubmit={updateName}>
                <fieldset className="fieldset bg-base-100 border-base-300 rounded-box  border p-5">

                    <label className="label text-base-content">
                        নাম
                    </label>
                    <input
                        type="text"
                        name="name"
                        className="input w-full"
                        placeholder="যেমন: রহিম উদ্দিন"
                        required
                    />

                    
                    <button
                        type="submit"
                        className="btn bg-[#34A853] mt-4 text-white rounded-lg"
                    >
                       আপডেট 
                    </button>
                </fieldset>
            </form>

        </div>
    );
};

export default ProfilePage;