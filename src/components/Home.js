import React from "react";
import Img1 from '../images/serviceImg1.jpg'
import Img2 from '../images/serviceImg2.png'
import Img3 from '../images/serviceImg3.png'
import img4 from '../images/serviceImg4.png'
import Img5 from '../images/clients2.png'
import Img6 from '../images/idea2.png'
import Img7 from '../images/Atgmail.png'
import Img8 from '../images/follow.png'
import Img9 from '../images/Email.png'
import Img10 from '../images/graph4.png'

function Bgimage(){
    return(
        <div>
        <div className='bgImage'>
            <div className='bgColor'>
                <div className='navbar-menu'><br />
                <Navbar />
                </div>
            </div>

        </div>
        <div className='bodybgColor'>
        <div>
         <ServiceCard />
        </div>
        <div>
        <Allclients />
        </div>
        </div>
        <div className='footerDiv'>
            <Footer />

        </div>
                
    </div>
    )
}

function Navbar(){
    return(
        <div>
            <div className="navbarDiv" >
                <br/>
                <br/>
                <ul className="navbar">
                    <li>Community</li>
                    <li>Portfolios</li>
                    <li>Inspiration</li>
                    <li>News</li>
                    <li>Features</li>
                    <li>Jobs</li>
                </ul>
            </div>
        </div>
    )
}

function ServiceCard() {
    return(
        <div className='cardSection'>
            <div className='allCards'>
                <div>
                   <Card1 />
            </div>
                <div>
                  <Card2 />
                </div>
                <div>
                   <Card3 />
                </div>
                <div>
                   <Card4 />    
                </div>
            </div>
        </div>
    )
}


function Card1() {
    return(
        <div className='card1'>
            <div className='cardBg'><br />
            <p className='servicesHeading'>Services</p>
            <div><img src={Img1} alt="client-img3" className='serviceImg1'/></div>
            <p className='paraHeading'>Suspendisse Sollicitudin</p>
            <p>Duis Vitae semper turpis</p><br />
            <hr></hr><br />
            <p>Sodales fermentum</p><br />
            <p>Qqoum integer</p><br />
            <p>Nibh arcu</p><br />
            </div>
            

        </div>
    )
}

function Card2() {
    return(
        <div className='card1'>
            <div className='cardBg'><br />
            <p className='servicesHeading'>Shared Files</p>
            <div><img src={Img2} alt="client-img4" className='serviceImg2'/></div>
            <p className='paraHeading'>Tempus Sapien</p>
            <p>Nunc vestibulum libero</p><br />
            <hr></hr><br />
            <p>Sed aliquam</p><br />
            <p>Nisi aenean</p><br />
            <p>Faucibus eu</p><br />
            </div>
            

        </div>
    )
}

function Card3() {
    return(
        <div className='card1'>
            <div className='cardBg'><br />
            <p className='servicesHeading'>Manage Lists & Subscribers</p>
            <div><img src={Img3} alt="client-img5" className='serviceImg3'/></div>
            <p className='paraHeading'>Aliquam Massa</p>
            <p>Nam at rhoncus odio</p><br />
            <hr></hr><br />
            <p>Varius sit amet</p><br />
            <p>Cursus lacinia</p><br />
            <p>Metus phasellus</p><br />
            </div>
        </div>
    )
}

function Card4() {
    return(
        <div className='card1'>
            <div className='cardBg'><br />
            <p className='servicesHeading'>Videos & Photos</p>
            <div><img src={img4} alt="client-img6" className='serviceImg4'/></div>
            <p className='paraHeading'>Magna Consectetur</p>
            <p>Integer risus sem maximus</p><br />
            <hr></hr><br />
            <p>Cras lectus</p><br />
            <p>Commodo mauris</p><br />
            <p>Sapien consequat</p><br />
            </div>
        </div>
    )
}
function Allclients() {
    return(
        <div className='allClients'>
            <div className='onlyClients'>
            <Clients />
            </div>
            <div className='onlyClients'>
            <Solutions />
            </div>
            <div className='onlyClients' id='lastProblem'>
            <Problems />
            </div>
        </div>
    )
}

function Clients(){
    return(
        <div className='clientsContent'>
            <p className='paraSpan'>Committed to our <span>Clients</span></p>
            <hr></hr>
            <div><img src={Img5} alt="client-img" className='serviceImg5'/></div>
            <div className='clients-paraBg'>
            <p className='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore laboriosam tempora in, modi ipsa repellendus deserunt fugit placeat cum, exercitationem veritatis sint quod dolor molestiae quas expedita eligendi recusandae sequi quam. Temporibus in fuga, tempora perspiciatis earum excepturi expedita modi.</p>
            <button className='readMore'>Read more</button>
            </div>
        </div>
    )
}

function Solutions(){
    return(
        <div className='clientsContent'>
            <p className='paraSpan'><span>Solutions</span> for the Bottom Line</p>
            <hr></hr>
            <div ><img src={Img6} alt="client-img2" className='serviceImg6' /></div>
            <div className='clients-paraBg'>
            <p className='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore laboriosam tempora in, modi ipsa repellendus deserunt fugit placeat cum, exercitationem veritatis sint quod dolor molestiae quas expedita eligendi recusandae sequi quam. Temporibus in fuga, tempora perspiciatis earum excepturi expedita modi.</p>
            <button className='readMore'>Read more</button>
            </div>
        </div>
    )
}

function Problems(){
    return(
        <div className='clientsContent'>
            <div className='problem'><img src={Img10} alt="client-img2" className='serviceImg10' /></div>
            
        </div>
    )
}


////////////////////Footer Section//////////////////////////////////

function Footer() {
    return(
        <div className='allFooterSec'>
            <div className='footerSec'>
                <div className='subscribe'><img src={Img7} alt="client-img2" className='serviceImg7' /></div>
                <p className='subscribe'>Contact Us</p>
                <p className='aboutUs'>GET NEWSLETTERS</p>
                <div className='input'><input type='text' /> Subscribe</div>
                <p><span>@Lorem ipsum </span>dolor sit amet consectetur</p> 
            <p>adipisicing elit. Quibusdam minus, nam ipsa</p> 
            <p>suscipit esse voluptatibus laudantium</p>

            </div>
            <div className='footerSec'>
            <div className='subscribe'> <img src={Img8} alt="client-img2" className='serviceImg7' /></div>
            <p className='subscribe'>FOLLOW US</p>
            <p className='aboutUs'>ON SOCIAL NETWORKS</p>
            <p className='socialNetworks'>Linkedin <span>&</span> Snapchat</p>  
            <p className='socialNetworks'>Facebook <span>&</span> Rozee</p>  
            <p className='socialNetworks'>Instagram <span>&</span> Upwork</p>
            <p className='socialNetworks'>Whatsapp <span>&</span> Fiver</p>
              
            

            </div>
            <div className='footerSec'>
                <div className='subscribe'><img src={Img9} alt="client-img2" className='serviceImg7' /></div>
                <p className='subscribe'>EMAIL</p>
                <p className='aboutUs'>Email US</p>
                <p><span>Email:</span> umairazeem1999@gmail.com</p>
                <p><span>Tel:</span> +92-3452886474</p>
                <p><span>Address:</span> Gulshan-e-Maymar Near Nadir Ali</p> 
                <p>Sindh,Karachi</p>


            </div>

        </div>
    )
}

export {Bgimage, Navbar, ServiceCard, Card1, Card2, Card3, Card4, Allclients, Clients, Solutions, Problems, Footer};
