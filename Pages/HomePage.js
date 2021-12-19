import React from 'react'
import styled from 'styled-components';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GithubIcon from '@material-ui/icons/GitHub';
import CodeIcon from '@material-ui/icons/Code';
import Particle from '../Components/Particle';

function HomePage() {
    return (
        <HomePageStyled>
            <div className="particle-con">
                <Particle />
            </div>
            <div className="typography">
                <h1>Hi, I'm <span>Shashwath</span></h1>
                <br></br>
                <p>
                    I am a full-stack-developer with a passion for web development,web-design and 
                    software-development.
                </p>
                <div className="icons">
                    <a href="https://www.linkedin.com/in/shashwath-bc-14726a168/" className="icon i-linkedin">
                        <LinkedInIcon />
                    </a>
                    <a href="https://github.com/shashwathbc?tab=repositories" className="icon i-github">
                        <GithubIcon />
                    </a>
                    <a href="https://leetcode.com/shashwathbc/" className="icon i-code">
                        <CodeIcon />
                    </a>
                </div>
            </div>
        </HomePageStyled>
    )
}

const HomePageStyled = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;
   h1{
       font-size: 4rem;
       color: var(--white-color);
       span{
           font-size: 4rem;
           color: var(--primary-color);
       }
   }
    .typography{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 80%;
        .icons{
            display: flex;
            justify-content: center;
            margin-top: 1rem;
            .icon{
                border: 2px solid var(--border-color);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: all .4s ease-in-out;
                cursor: pointer;
                &:hover{
                    border: 2px solid var(--primary-color);
                    color: var(--primary-color);
                }
                &:not(:last-child){
                    margin-right: 1rem;
                }
                svg{
                    margin: .5rem;
                }
            }
            .i-youtube{
                &:hover{
                    border: 2px solid red;
                    color: red;
                }
            }
            .i-github{
                &:hover{
                    border: 2px solid #5F4687;
                    color: #5F4687;
                }
            }
        }
    }
`;

export default HomePage;