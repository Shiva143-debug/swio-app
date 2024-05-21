
import './App.css';
import { FaPause } from "react-icons/fa6";
import { IoPlaySkipForward } from "react-icons/io5";
import { IoPlaySkipBackSharp } from "react-icons/io5";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaApple } from "react-icons/fa";
import { LuArrowRightCircle } from "react-icons/lu";
import { useNavigate } from 'react-router-dom';
import { Dialog } from 'primereact/dialog';
import { useState } from "react"
import Payment from './Payment';

const Home = () => {

  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);

  const onPayment = () => {
    // navigate('/payment');
    setVisible(true)

  }

  const onViewPayment = () => {
    navigate('/viewTransacations');
  }

  const handleClick = () => {
    window.open('https://replay.software/updates/sleeve-2-3', '_blank');
  };


  return (

    <div className="app-container">

      <div className='first-div'>
        <h1><span style={{ fontWeight: "bold", fontSize: "58px" }}>Sleeve</span> <span style={{ fontWeight: 200, fontSize: "52px" }}>2</span></h1>

        <center><h2 style={{ fontWeight: "bold" }}>The ultimate music accessory for your Mac.</h2></center>

        <center><p className='para px-2'>Sleeve sits on the desktop, displaying and controlling the music you’re currently playing in
          <img src="/images/song1.png" alt="song1" style={{ width: "25px", marginLeft: "5px" }} /> Image of an app iconApple Music, Image of an app icon
          <img src="/images/song2.png" alt="song2" style={{ width: "25px", marginLeft: "5px" }} /> Spotify, Image of an app icon
          <img src="/images/song3.png" alt="song3" style={{ width: "25px", marginLeft: "5px" }} />  Doppler.</p></center>


        <div className='first-div-buttons'>
          <button style={{ backgroundColor: "white", padding: "15px", border: "1px solid white", borderRadius: "8px", margin: "10px" }}><FaApple />Mac App Store</button>
          <button style={{ color: "white", backgroundColor: "transparent", padding: "15px", border: "1px solid white", borderRadius: "8px", margin: "10px" }} onClick={onPayment}>Buy Directly <span style={{ backgroundColor: "white", color: "black", padding: "5px", borderRadius: "4px" }}>$5.99</span></button>
          <button style={{ backgroundColor: "white", padding: "15px", border: "1px solid white", borderRadius: "8px", margin: "10px" }} onClick={onViewPayment}>View Transactions</button>
        </div>

        <p className="pt-5" style={{ color: "gray", maxWidth: "250px", textAlign: "center" }}>No subscriptions. No in-app purchases. Requires macOS 11 Big Sur or later.</p>

        <div style={{ display: "flex", border: "1px solid grey", padding: "10px", borderRadius: "50px" }}>
          <img src="images/1.png" alt="1" style={{ width: "60px", height: "60px" }} />
          <p className='para-of-desktop px-5'>
            Now with shelves and progress bar . See what's new in Sleeve 2.3
          </p>
          <p className='para-of-mobile px-2'>
            Sleeve 2.3 now available
          </p>
          <LuArrowRightCircle size={40} onClick={handleClick} style={{ cursor: 'pointer' }} />
        </div>

      </div>

      <div className='second-div mt-5'>

        <p ><span style={{ color: "lightblue" }}>NEW IN</span> <span style={{ color: "black", backgroundColor: "lightblue", padding: "3px", borderRadius: "8px" }}>2.0</span></p>


        <center><h2 className='heading pt-2'>Themes. Unlimited themes.</h2></center>
        <center><p className='para pt-2'>Themes in Sleeve make creating and switching between customizations easy. Share your own creations with friends and install as many themes as you like with just a double-click.</p></center>

        <div className='main-card-desktop' style={{ height: "350px" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <img src="/images/card-image1.jpg" alt="2" className='card-image1' />
            <h5>Eternal Sunshine</h5>
            <h6>Forgotten Feels</h6>
            <h5>Slow Magic</h5>
          </div>

          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "rgba(0, 0, 0, 0.5)", opacity: "0.5px", borderRadius: "16px" }}>
            <img src="/images/card-image2.jpg" alt="2" className='card-image2' />
            <div style={{ display: "flex", flexDirection: "column", margin: "10px" }}>
              <h6>Bunny Is a Rider</h6>
              <p style={{ maxWidth: "200px", fontSize: "14px" }}>Desire, I Want to Turn Into You Caroline Polachek</p>

              <div>
                <IoPlaySkipBackSharp />
                <FaPause />
                <IoPlaySkipForward />
              </div>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <img src="/images/card-image3.jpg" alt="2" className='card-image3' />

            <div>
              <IoPlaySkipBackSharp />
              <FaPause />
              <IoPlaySkipForward />
            </div>
            <h6 style={{ maxWidth: "150px", textAlign: "center" }}>Are You Listening How To Be Human Chelsea Cutler</h6>
          </div>

          {/* <img src="/images/card-image4.jpg" alt="2" className='card-image4' /> */}
          <div style={{ position: 'relative', display: 'flex', flexDirection: 'column' }}>
            <img src="/images/card-image4.jpg" alt="2" className='card-image4' />
            <div className='text-overlay'>
              <h5>Creation Comes Alive</h5>
              <h6>Petit Biscuit</h6>

            </div>
          </div>
        </div>


        <div className='main-card-mobile' style={{ width: "85%" }}>
          <div className="image-icons">
            <img src="/images/card-image2.jpg" alt="2" className='card-image2' />
            <div style={{ display: "flex", flexDirection: "column", margin: "10px" }}>
              <h6>Bunny Is a Rider</h6>
              <p style={{ maxWidth: "200px", fontSize: "14px" }}>Desire, I Want to Turn Into You Caroline Polachek</p>

              <div>
                <IoPlaySkipBackSharp />
                <FaPause />
                <IoPlaySkipForward />
              </div>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <img src="/images/card-image3.jpg" alt="2" className='card-image3' />

            <div>
              <IoPlaySkipBackSharp />
              <FaPause />
              <IoPlaySkipForward />
            </div>
            <h6 style={{ maxWidth: "150px", textAlign: "center" }}>Are You Listening How To Be Human Chelsea Cutler</h6>
          </div>
        </div>


        <div className="two-cards-container">
          <div className='card1'>

            <div>
              <h3>Change it up</h3>
              <p style={{ maxWidth: '200px' }}>Switch between themes with just a click.</p>
              <p style={{ maxWidth: '200px' }}>Modify the built-in themes or create your own using Sleeve’s extensive preferences.</p>
            </div>

            <div className='image-cs-container'>
              <div className='card1-image-container'>
                <img src="/images/ThemeUIActiveDark.png" alt="2" className='image1' />
                <img src="/images/ThemeUIDark.png" alt="2" className='image2' />
              </div>


              <img src="/images/ThemeIcon.png" alt="2" className='images-sp-2' />

            </div>


          </div>
          <div className='card2' >

            <div>
              <h3>Shareable</h3>
              <p style={{ maxWidth: '200px' }}>Export your themes and share them with friends using the handy new Sleeve Theme file format.</p>
              <p style={{ maxWidth: '200px' }}>Install themes from anywhere with a double-click or a drag and drop.</p>
            </div>

            <div className='image-cs-container'>
              <img src="/images/ThemeExportDark.png" alt="2" className='images-cs-1' />
              <img src="/images/ThemeFile.png" alt="2" className='images-cs-2' />


            </div>


          </div>
        </div>

      </div>

      <div className='third-div mt-5 mb-5'>

        <p style={{ color: "blueviolet" }}>CUSTOMIZATION</p>
        <h2 className='heading pt-2'>Countless ways to customize.</h2>
        <p className='para pt-2'>Customization is at the core of the Sleeve experience — choose from any combination of design choices, behaviors and settings to make Sleeve at home on your desktop.</p>

        <div class="image-container" >
          <img src="/images/image1.png" alt=" 1" className="img img1" />
          <img src="/images/img2.png" alt=" 2" className="img img2" />
          <img src="/images/img3.png" alt=" 3" className="img img3" />
          <img src="/images/img4.png" alt=" 4" className="img img4" />
          <img src="/images/img5.png" alt=" 5" className="img img5" />
          <img src="/images/img6.png" alt=" 6" className="img img6" />
          <img src="/images/img7.png" alt=" 7" className="img img7" />
          <img src="/images/img9.png" alt=" 8" className="img img9" />
          <img src="/images/img8.png" alt=" 8" className="img img8" />
        </div>
        


      </div>



      <div className='fourth-div mt-5'>

        <div class="l-container mt-5 mb-5">
          <div className='left'>
            <img src="/images/img9.png" alt=" 7" className="img img9" />
            <h1 class="pb-2 pt-5">Artwork</h1>
            <p class="v-para pb-2">Scale artwork all the way up or all the way down. Round the corners or leave them square.</p>
            <p class="v-para pb-2">Choose shadow and lighting effects to bring your album artwork to life.</p>
            <p class="v-para pb-2">Or hide it completely.</p>
          </div>
          <div className='right d-flex flex-column' >
            <img src="/images/c-image1.jpg" alt=" 7" className="c-image" />
            <img src="/images/c-image2.jpg" alt=" 7" className="c-image" />
            <img src="/images/c-image3.jpg" alt=" 7" className="c-image" />
          </div>

        </div>

        <div class="l-container mt-5 mb-5">
          <div className='left d-flex flex-column mb-5 pb-2'>
            <img src="/images/img6.png" alt=" 7" className="img img9" />
            <h1 class="v-para pb-2 pt-5" >Typography</h1>
            <p class="v-para pb-2">Pick the track info you want to display, and then exactly how to display it.</p>
            <p class="v-para pb-2">Choose the fonts, weights, sizes, and transparency to use for each line, along with customizing color and shadow.</p>
          </div>
          <div className='right d-flex flex-column'>
            <img src="/images/c-image4.jpg" alt=" 7" className="c-image c-image4" />
            <img src="/images/c-image5.jpg" alt=" 7" className="c-image c-image5" />
          </div>

        </div>

        <div class="l-container mt-5 mb-5">
          <div className='left d-flex flex-column mb-5 pb-2'>
            <div className='images-3-container mb-5'>
              <img src="/images/img4.png" alt=" 7" className="pic img-1" />
              <img src="/images/img7.png" alt=" 7" className="pic img-2" />
              <img src="/images/img3.png" alt=" 7" className="pic img-3" />
            </div>

            <h1 class="pb-2 pt-5 mt-5" >Interface</h1>
            <p class="v-para pb-2">Customize the layout, alignment and position to fit your setup.</p>
            <p class="v-para pb-2">Show and hide playback controls. Add a backdrop layer and customize it.</p>

          </div>
          <div className='right d-flex flex-column' style={{ marginBottom: "120px" }}>
            <div className="image-stack">
              <img src="/images/c-image8.jpg" alt=" 7" className="c-image c-image-8" />
              <img src="/images/c-image9.jpg" alt=" 7" className="c-image c-image-9" />
            </div>
          </div>

        </div>


        <div class="l-container mb-5">
          <div className='left d-flex flex-column mb-5 pb-2'>
            <div className='images-3-container mt-5 mb-5'>
              <img src="/images/img2.png" alt=" 7" className="c-imagepic img-1" />
              <img src="/images/image1.png" alt=" 7" className="c-imagepic img-2" />
              <img src="/images/img8.png" alt=" 7" className="c-imagepic img-3" />
            </div>

            <h1 class="pb-2 pt-2 mt-5" >Settings</h1>
            <p class="v-para pb-2">Decide if Sleeve stays out of the way, behind windows, or in front of them — or only when you need to see it.</p>
            <p class="v-para pb-2">Show it in the Dock, choose from custom icons, or keep it on the Desktop only.</p>
            <p class="v-para pb-2">Set your custom keyboard shortcuts and integrate with the apps you use.</p>

          </div>

          <div className='right d-flex flex-column'>
            <div className="image-stack2">
              <img src="/images/c-image10.jpg" alt=" 7" className="c-image c-image-10" />
              <img src="/images/c-image11.jpg" alt=" 7" className="c-image c-image-11" />
              <img src="/images/c-image12.jpg" alt=" 7" className="c-image c-image-12" />
            </div>
          </div>

        </div>

      </div>


      <div className="songs-container mt-5" >

        <p style={{ color: "red" }}>INTEGRATIONS</p>
        <h2 style={{ fontWeight: "bold", fontSize: "42px" }}>Like, Scrobble.</h2>


        <div className="cards-cs-spotify-container" >
          <div className='card-cs'>
            <img src="/images/cs.png" alt="cs" className="cs" />
            <p style={{ maxWidth: "500px", fontSize: "24px", textAlign: 'center', color: 'brown' }}>Sleeve integrates with Last.fm so you never miss a track. Simply sign in and start scrobbling.</p>
            <p style={{ color: "brown", textAlign: 'center' }}>Last.fm account required</p>

          </div>

          <div className='card-spotify '>
            <img src="/images/spotify.png" alt="spotify" className="spotify" />
            <p style={{ maxWidth: "500px", fontSize: "24px", textAlign: 'center', color: 'green' }}>With Sleeve 2 you can now like tracks in Spotify, without ever having to switch away from Sleeve.</p>
            <p style={{ color: "green", textAlign: 'center' }}>A free Spotify Developer account is required</p>
          </div>

        </div>

        <div className='last-div mt-5 mb-5'>
          <div className='d-flex'>
            <img src="/images/song1.png" alt="song1" style={{ width: "100px", marginLeft: "10px" }} />
            <img src="/images/song2.png" alt="song1" style={{ width: "100px", marginLeft: "10px" }} />
            <img src="/images/song3.png" alt="song1" style={{ width: "100px", marginLeft: "10px", marginRight: "20px" }} />
          </div>
          <div>
            <p className='l-para'>Sleeve integrates directly with Apple Music, Spotify and Doppler. Control playback, like tracks and adjust volume seamlessly.</p>
          </div>

        </div>

      </div>

  



      <Dialog header="Header" visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)}>
        <Payment onCancel={() => setVisible(false)} />
      </Dialog>
    </div>



  );
}

export default Home;
