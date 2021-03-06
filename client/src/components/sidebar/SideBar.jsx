import React from 'react'
import './sidebar.css'
import { RssFeed, Bookmark, WorkOutline, Event, School, ChatBubble, GroupAdd, VideoCallSharp} from '@material-ui/icons'
import Friends from '../friends/Friends'
import {Users} from '../../mockData'

function SideBar() {
    return (
        <div className='sidebar'>
            <div className="sidebarwrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <RssFeed className='sidebarIcon'/>
                        <span className="sidebarListItemText">Feeds</span>
                    </li>

                    <li className="sidebarListItem">
                        <ChatBubble className='sidebarIcon'/>
                        <span className="sidebarListItemText">Chats</span>
                    </li>

                    <li className="sidebarListItem">
                        <GroupAdd className='sidebarIcon'/>
                        <span className="sidebarListItemText">Groups</span>
                    </li>

                    <li className="sidebarListItem">
                        <VideoCallSharp className='sidebarIcon'/>
                        <span className="sidebarListItemText">Video</span>
                    </li>

                    <li className="sidebarListItem">
                        <Bookmark className='sidebarIcon'/>
                        <span className="sidebarListItemText">Bookmarks</span>
                    </li>

                    <li className="sidebarListItem">
                        <WorkOutline className='sidebarIcon'/>
                        <span className="sidebarListItemText">Jobs</span>
                    </li>

                    <li className="sidebarListItem">
                        <Event className='sidebarIcon'/>
                        <span className="sidebarListItemText">Events</span>
                    </li>

                    <li className="sidebarListItem">
                        <School className='sidebarIcon'/>
                        <span className="sidebarListItemText">Courses</span>
                    </li>
                </ul>

                <button className="sidebarBtn">
                    Show More
                </button>
                <hr className="sidebarHr" />

                <ul className="sidebarFriendList">
                   {Users.map((user) => (
                       <Friends key={user.id} user={user}/>
                   ))}
                </ul>
            </div>
        </div>
    )
}

export default SideBar
