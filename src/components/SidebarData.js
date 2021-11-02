import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
{
    title: 'Hello World',
    path: '/overview',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpFill />,
    subNav: [
        {
            title: 'With Visual Studio',
            path: '/overview/users',
            icon: <IoIcons.IoIosPaper />,
        },
        {
            title: 'Without Visual Studio',
            path: '/overview/revenue',
            icon: <IoIcons.IoIosPaper />, 
        },
    ]
    
},
{
    title: 'Reports',
    path: '/reports',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpFill />,
    subNav: [
        {
            title: 'Reports',
            path: '/reports/reports1',
            icon: <IoIcons.IoIosPaper />,
        },
        {
            title: 'Reports 2',
            path: '/reports/reports2',
            icon: <IoIcons.IoIosPaper />,
        },
        {
            title: 'Reports 3',
            path: '/reports/reports3',
            icon: <IoIcons.IoIosPaper />,
        },
    ]
    
},
{
    title: 'Products',
    path: '/products',
    icon: <FaIcons.FaCartPlus />
  },
  {
    title: 'Support',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />
  }
];