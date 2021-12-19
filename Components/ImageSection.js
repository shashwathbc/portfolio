import React from 'react';
import styled from 'styled-components';
import resume from "../img/resume.png";
import PrimaryButton from './PrimaryButton';
function ImageSection() {
    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img src={resume} alt=""/>
            </div>
            <div className="right-content">
                
                    <h4>I am <span>Shashwath</span></h4>
               
                <p className="paragraph">
                Highly organized and detail-oriented honors graduate from Dayanand sagar college 
                seeking an entry-level position as an web developer , web designer , or software development. 
                 Proficient in developing databases, creating user interfaces, writing and testing codes,troubleshooting
                 simple/complex issues and implementing new features based on user feedback.

                </p>
                <div className="about-info">
                    <div className="info-title">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Location</p>
                        <p>Service</p>
                    </div>
                    <div className="info">
                        <p>: Shashwath B C</p>
                        <p>: 21</p>
                        <p>: INDIAN</p>
                        <p>: English , Hindhi , Kannada </p>
                        <p>: Banglore , Karnataka </p>
                        <p>: web developer , software developer , web designer</p>
                    </div>
                </div>
                <PrimaryButton title={'Download'} />
            </div>
        </ImageSectionStyled>
    )
}


const ImageSectionStyled = styled.div`
margin-top: 5rem;
display: flex;
@media screen and (max-width:1000px){
        flex-direction: column;
        .left-content{
            margin-bottom: 2rem;
        }
    }
.left-content{
        width: 90%;
        height: 100vh;
        img{
            width: 80%;
            height: 70%;
            object-fit: cover;
            
        }
    }
    .right-content{
        width: 100%;
        
        h4{
            font-size: 2rem;
            color: var(--white-color);
            span{
                font-size: 2rem;
            }
        }

        .paragraph{
            font-size: 1rem;
            padding: 1rem 0;
        }
        .about-info{
            display: flex;
            padding-bottom: 1.4rem;
            .info-title{
                padding-right: 3rem;
                p{
                    font-weight: 600;
                    font-size: 0.2rem;
                }
            }
            .info-title, .info{
                p{
                    font-size: 0.9rem;
                    padding: 0.1rem 0;
                }
            }
        }
    }

`;

export default ImageSection
