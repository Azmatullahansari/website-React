import React from 'react';
import './Home.css';
import ThemeToggle from './ThemeToggle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Home = () => {
  return (
    <div className="grid-container">
      <header>
        <div className='idea'>
          <div className='heading'>YOUR IDEA MATTERS!</div>
          <p className="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, error.</p>
          <div className='web'>Make a Website</div>
        </div>
        <div >
          <img src="https://i.ytimg.com/vi/i9t8gdaBsTg/maxresdefault.jpg" alt="" />
        </div>
      </header>

      <main>
        <div className="photos">
          <div className='building'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHYIW_N9YlI6lLosi21BDJzVGR35E61y6mAw&s" alt="" />
            <h2>Local Business</h2>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
          <div className='building'>
            <img src="https://www.shutterstock.com/image-vector/pink-paper-shopping-bag-fashion-260nw-2316145865.jpg" alt="" />
            <h2>Online store</h2>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
          <div className='building'>
            <img src="https://cdn-icons-png.flaticon.com/512/4922/4922073.png" alt="" />
            <h2>Blogging</h2>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
          <div className='building'>
            <img src="https://www.iconpacks.net/icons/free-icons-6/free-pink-verified-badge-icon-18770-thumb.png" alt="" />
            <h2>Portfolio</h2>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>
        <h1>Our Services</h1>
        <div className='img'>
          <img src="https://thumbs.dreamstime.com/b/pink-shopping-trolley-pink-background-creative-shopping-wallpaper-sale-pink-shopping-trolley-pink-background-creative-320300642.jpg" alt="" />
          <img src="https://img.freepik.com/premium-vector/3d-cartoon-thumb-up-hand-gesture-isolated-blue-background-hand-thumb-up-like-sign-vector-3d-illustration_221648-809.jpg" alt="" />
          <img src="https://www.shutterstock.com/image-illustration/3d-render-flash-lightning-sale-260nw-2233239047.jpg" alt="" />
        </div>
      </main>

      <footer>
        <div className="services">
          <div>
            <p>About</p>
            <p>News</p>
            <p>Hosting</p>
            <p>Privacy</p>
          </div>
          <div>
            <p>Showcase</p>
            <p>Theme</p>
            <p>Pluggins</p>
            <p>Patterns</p>
          </div>
          <div>
            <p>Learn</p>
            <p>Documentation</p>
            <p>Developers</p>
            <p>Worldpresstv</p>
          </div>
          <div>
            <p>Get Involved</p>
            <p>Events</p>
            <p>Donates</p>
            <p>Swag store</p>
          </div>
          <div>
            <p>Wordpress.com</p>
            <p>Matt</p>
            <p>bbPress</p>
            <p>BuddyPress</p>
          </div>
        </div>
       <div className="last">
       <svg xmlns="http://www.w3.org/2000/svg"  height="20px" width="20px"viewBox="0 0 512 512"><path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"/></svg>
       <svg xmlns="http://www.w3.org/2000/svg" height="20px" width="20px" viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg>

       <svg xmlns="http://www.w3.org/2000/svg" height="20px" width="20px" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>

       <svg xmlns="http://www.w3.org/2000/svg" height="20px" width="20px"viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>

       <svg xmlns="http://www.w3.org/2000/svg" height="20px" width="20px" viewBox="0 0 576 512"><path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"/></svg>
       
       </div>
      </footer>
       
    </div>
  );
};

export default Home;

       









