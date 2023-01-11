import React from 'react';
import { BsSpeedometer2 } from 'react-icons/bs';
import {MdOutlineCompare} from "react-icons/md"
import {AiOutlineFieldTime, AiOutlineLogout } from "react-icons/ai"
import {BiAnalyse} from "react-icons/bi"
import {TbListDetails} from "react-icons/tb"
import {MdPublishedWithChanges} from "react-icons/md"
import { NavLink } from 'react-router-dom';
import {motion} from "framer-motion"
import "./Sidebar.scss"
  
export function Sidebar () {
  return (
    <>
      <motion.nav className='sidebar'>
        <div className='sidebar__section logo'>
            <p>R</p>
          </div >
          <div className='sidebar__nav'>
            <div className='sidebar__section'>
            <NavLink to='/' activeStyle><BsSpeedometer2></BsSpeedometer2>
                

                </NavLink>
            </div>
            <div className='sidebar__section'>
            <NavLink to='/Benchmark' activeStyle><MdOutlineCompare></MdOutlineCompare>
            

            </NavLink>
            </div>
            <div className='sidebar__section'>
            <NavLink to='/time' ><AiOutlineFieldTime></AiOutlineFieldTime>
            
            </NavLink>
            </div>
            <div className='sidebar__section'>
            <NavLink to='/team' ><BiAnalyse></BiAnalyse>
                
            </NavLink>
            </div>
            <div className='sidebar__section'>
            <NavLink to='/sgs' ><TbListDetails></TbListDetails></NavLink>
            </div>
          </div>
          <div className='sidebar__section logout'>
            <AiOutlineLogout></AiOutlineLogout>
          </div>
      </motion.nav>
    </>
  );
};
  
