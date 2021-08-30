import {HomeIcon, CollectionIcon, BadgeCheckIcon,LightningBoltIcon,UserIcon,SearchIcon} from '@heroicons/react/outline'

import Image from 'next/image';
import HeaderItem from './HeaderItem';
function Header() {
    return (
        <header className='flex flex-col sm:flex-row m-5 justify-between  items-center'>
             <div className='flex flex-grow justify-evenly max-w-2xl'>
                 <HeaderItem title='HOME' Icon={HomeIcon}/>
                 <HeaderItem title='TRENDING' Icon={LightningBoltIcon}/>
                 <HeaderItem title='VERIFIED' Icon={BadgeCheckIcon}/>
                 <HeaderItem title='COLLECTIONS' Icon={CollectionIcon}/>
                 <HeaderItem title='SEARCH' Icon={SearchIcon}/>
                 <HeaderItem title='ACCOUNT' Icon={UserIcon}/>

             </div>
           <h1 className="text-4xl mr-5 shadow-xl border-blue hover:text-teal-500 hover:gb-white mt-4 lg:mt-0 transition ease-in duration-700">HuTv</h1>
        
        </header>
    )
}



export default Header;


