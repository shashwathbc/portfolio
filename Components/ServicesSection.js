import React from 'react'
import { InnerLayout } from '../styles/Layouts';
import styled from 'styled-components';
import Title from './Title';
import ServiceCard from './ServiceCard';
import design from '../img/design.svg'; 
import webdesign from '../img/webdesign.svg'; 
function ServicesSection() {
    return (
        <InnerLayout>
            <ServicesSectionStyled>
                <Title title={'SKILLS'} span={'skills'} />
                <div className="services">
                    <ServiceCard  
                    image={design}
                     title={'Software Development'} 
                     paragraph={'lorem jskdvf  jweb i jeih  w wj  fewvf h  wefwef we ij'}
                     />

                     <div className="mid-card">
                     <ServiceCard  
                    image={design}
                     title={'Web Development'} 
                     paragraph={'lorem jskdvf  jweb i jeih  w wj  fewvf h  wefwef we ij'}
                     />
                     </div>
                    

                    <ServiceCard  
                    image={webdesign}
                     title={'Web Design'} 
                     paragraph={'lorem jskdvf  jweb i jeih  w wj  fewvf h  wefwef we ij'}
                     />

                     
                </div>
            </ServicesSectionStyled>
        </InnerLayout>
    )
}

const ServicesSectionStyled = styled.section`
.services{
    margin-top: 5rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1.5rem;
        @media screen and (max-width:1000px){
            flex-direction: column;
        }
        @media screen and (max-width:950px){
            grid-template-columns: repeat(2, 1fr);
        }
        @media screen and (max-width:650px){
            grid-template-columns: repeat(1, 1fr);
        }
       
}

`;

export default ServicesSection
