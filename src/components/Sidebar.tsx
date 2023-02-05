import React from 'react'
import { SidebarData } from './SidebarData'
import { SidebarMenu, MenuItems, MenuItemLinks } from '../styles/global'


const Sidebar: React.FC = () => {

    return (
        <>
            <SidebarMenu>

                {SidebarData.map((item, index) => {
                    return (
                        <MenuItems key={index}>
                            <MenuItemLinks to={item.path}>
                                {item.icon}
                                <span style={{ marginLeft: '16px' }}>{item.title}</span>
                            </MenuItemLinks>
                        </MenuItems>
                    )
                })}

            </SidebarMenu>
        </>
    )
}

export default Sidebar

