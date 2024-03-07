import { Animator, ScrollContainer, ScrollPage, Sticky, Zoom,Fade, batch,Move, MoveOut, ZoomIn,FadeIn, StickyIn, MoveIn, FadeOut} from 'react-scroll-motion';
import './ScrollTextStyles.css';



const ZoomInScrollOut = batch(StickyIn(),FadeIn(),ZoomIn());
const FadeUpRight = batch(Fade(),Sticky(),MoveIn(1000,0));
const FadeUpLeft = batch(Fade(),Sticky(),MoveIn(-1000,0));
const FadeSpeLeft = batch(Fade(),Sticky());
const FadeSpeRight = batch(Fade(),Sticky());


const ScrollText = () =>{
    return(
        <div className='section-scroll'>
<ScrollContainer >
    <ScrollPage page={0}>
                <Animator animation={batch(Sticky(),Fade(),MoveOut(0,-200))}>
                    <div className='presentation-title-test'>
                            <h1> Présentation de l'édition 2023</h1>
                    </div>
                
                </Animator>
            </ScrollPage>
            <ScrollPage page={1}>
                <Animator animation={batch(Sticky(),Fade(),MoveOut(0,-200))}>
                    <h2> Le temps d'un week-end</h2>
                </Animator>
            </ScrollPage>

            <ScrollPage page={2}>
                <Animator animation={FadeUpRight}>
                    <h2> Près de 4500 étudiants sportifs se déplacent </h2>
                </Animator>
            </ScrollPage>
            <ScrollPage page={3}>
                <Animator animation={FadeUpLeft}>
                    <h2> pour participer aux compétitions dans l'un des </h2>
                </Animator>
            </ScrollPage>
            <ScrollPage page={4}>
                <Animator animation={ZoomInScrollOut}>
                    <h2> 19 sports proposés </h2>
                </Animator>
            </ScrollPage>
            <ScrollPage page={5}>
            <Animator animation={batch(Sticky(),MoveIn(0,100),Fade())}>
                    <h2> ainsi qu'aux différentes </h2>
                </Animator>
            </ScrollPage>
            <ScrollPage page={6}>
            <Animator animation={ZoomInScrollOut}>
                    <h2> activités mises en places </h2>
                </Animator>
            </ScrollPage>
            
            
            
        </ScrollContainer>

        </div>
        
    )
}

export default ScrollText