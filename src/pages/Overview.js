import React from 'react';
import "/home/sankalp/reactWorkspace/hworld-rdemo/node_modules/materialize-css";

const Overview = () => {
    return (
      <div className='home'>
      <div className="row">
      <div className="col s12 m4 l8" id="columntwo">
      <h1>Hello World Project from ReactJS in Linux Ubuntu</h1>
      <div className="wrapper">
      <div className="divider div-transparent"></div>
     <article><strong>Step 1) </strong>Download VS Code & Install</article>
      <p>You can Dowmload VS Code from this link- <a href="https://code.visualstudio.com/download">https://code.visualstudio.com/download</a></p>
	    <div className="divider div-transparent"></div>
      <article><strong>Step 2) </strong>Steps to Download Node JS in Ubuntu</article>
      <div id="sublst">
        <ol type="i">
        <li><pre className="result">cd ~</pre></li>
        <li><pre className="result">curl -sL https://deb.nodesource.com/setup_10.x -o nodesource_setup.sh</pre></li>
        <li><pre className="result">sudo bash nodesource_setup.sh</pre>
        <a href="/imgs/VS_Code_image15.png">
      <img src={process.env.PUBLIC_URL + "/imgs/VS_Code_image15.png"} alt="Paris" />
      </a></li>
        <li><p id="subcnt">Command use to get install the nodejs in your system</p>      
        <pre className="result">sudo apt-get install -y nodejs</pre>
        <a href="/imgs/VS_Code_image16.png">
      <img src={process.env.PUBLIC_URL + "/imgs/VS_Code_image16.png"} alt="Paris" />
      </a></li>
        <li><p id="subcnt">Now to check the version of nodejs and to know that nodejs is finally installed </p>      
        <pre className="result">node -v	</pre>
        <a href="/imgs/VS_Code_image17.png">
      <img src={process.env.PUBLIC_URL + "/imgs/VS_Code_image17.png"} alt="Paris" />
      </a></li>
      </ol></div>
      <div className="divider div-transparent"></div>
      <article><strong>Step 3) </strong>Open VS Code </article>
      <a href="/imgs/VS_Code_image.png">
      <img src={process.env.PUBLIC_URL + "/imgs/VS_Code_image.png"} alt="Paris" />
      </a>
      <div className="divider div-transparent"></div>
      <article><strong>Step 4) </strong>Go to Terminal </article>
      <p>Now go to the top most side and click on the Terminal tab</p>
      <a href="/imgs/VS_Code_image2.png">
      <img src={process.env.PUBLIC_URL + "/imgs/VS_Code_image2.png"} alt="Paris" />
      </a>
      <div className="divider div-transparent"></div>
      <article><strong>Step 5) </strong>Click on New Terminal</article>
      <a href="/imgs/VS_Code_image3.png">
      <img src={process.env.PUBLIC_URL + "/imgs/VS_Code_image3.png"} alt="Paris" />
      </a>
      <div className="divider div-transparent"></div>
      <article><strong>Step 6) </strong>Then write commands</article>
      <div id="sublst">
        <ol type="i">
        <li><p id="subcnt">Make ReactJS Directory </p>      
        <pre className="result">mkdir reactWorkspace</pre>
        <a href="/imgs/VS_Code_image4.png">
      <img src={process.env.PUBLIC_URL + "/imgs/VS_Code_image4.png"} alt="Paris" />
      </a></li>
        <li><p id="subcnt">Change Directory to reactWorkspace by</p>      
        <pre className="result">cd reactWorkspace/</pre>
        <a href="/imgs/VS_Code_image5.png">
      <img src={process.env.PUBLIC_URL + "/imgs/VS_Code_image5.png"} alt="Paris" />
      </a></li>
        <li><p id="subcnt">Make ReactJS Hello World Project </p>      
        <pre className="result">npm init react-app hello-world</pre>
        <a href="/imgs/VS_Code_image6.png">
      <img src={process.env.PUBLIC_URL + "/imgs/VS_Code_image6.png"} alt="Paris" />
      </a></li>
        <li><p id="subcnt">Now Go to Hello-World File </p>      
        <pre className="result">cd hello-world/</pre></li>
        <li><p id="subcnt">Now click on the App.js file to edit the html div tag according to your choice. </p>
        <a href="/imgs/VS_Code_image7.png">
      <img src={process.env.PUBLIC_URL + "/imgs/VS_Code_image7.png"} alt="Paris" />
      </a></li>
        <li><p id="subcnt"> To start the Hello World Project </p> 
        <pre className="result">npm start</pre>
        <a href="/imgs/VS_Code_image8.png">
      <img src={process.env.PUBLIC_URL + "/imgs/VS_Code_image8.png"} alt="Paris" />
      </a></li>
        <li><p id="subcnt">Then the Hello World Project runs in Browser </p>
        <a href="/imgs/VS_Code_image9.png">
      <img src={process.env.PUBLIC_URL + "/imgs/VS_Code_image9.png"} alt="Paris" />
      </a></li>
      </ol></div>
      <div className="divider div-transparent"></div>
      </div>
        </div>
      <div className="col s12 m4 l2" id="columnthree"><p>s12 m4</p></div>
     </div>
      </div>
    );
};
export const WithVisual = () => {
  return (
    <div className='home'>
    <div className="row">
    <div className="col s12 m4 l8" id="columntwo">
    <h1>With Visual Studio</h1>
    <div className="wrapper">
     <article><strong>Step 1) </strong>Download VS Code & Install</article>
      <p>You can Dowmload VS Code from this link- <a href="https://code.visualstudio.com/download">https://code.visualstudio.com/download</a></p>
	    <div className="divider div-transparent"></div>
      <article><strong>Step 2) </strong>Download Node JS</article>
      <p>You can Download Node JS from this link- <a href="https://nodejs.org/en/download/">https://nodejs.org/en/download/</a></p>
      <div className="divider div-transparent"></div>
      <article><strong>Step 3) </strong>Open VS Code </article>
      <a href="/imgs/VS_Code_image.png">
      <img src={process.env.PUBLIC_URL + "/imgs/VS_Code_image.png"} alt="Paris" />
      </a>
      <div className="divider div-transparent"></div>
      <article><strong>Step 4) </strong>Go to Terminal </article>
      <p>Now go to the top most side and click on the Terminal tab</p>
      <a href="/imgs/VS_Code_image2.png">
      <img src={process.env.PUBLIC_URL + "/imgs/VS_Code_image2.png"} alt="Paris" />
      </a>
      <div className="divider div-transparent"></div>
      <article><strong>Step 5) </strong>Click on New Terminal</article>
      <a href="/imgs/VS_Code_image3.png">
      <img src={process.env.PUBLIC_URL + "/imgs/VS_Code_image3.png"} alt="Paris" />
      </a>
      <div className="divider div-transparent"></div>
      <article><strong>Step 6) </strong>Then write commands</article>
      <div id="sublst">
        <ol type="i">
        <li><p id="subcnt">Go to the D drive</p>      
        <pre className="result">D:</pre></li>
        <li><p id="subcnt">Make ReactJS Directory </p>      
        <pre className="result">mkdir reactWorkspace</pre>
        <a href="/imgs/VS_Code_image4.png">
      <img src={process.env.PUBLIC_URL + "/imgs/VS_Code_image4.png"} alt="Paris" />
      </a></li>
        <li><p id="subcnt">Change Directory to reactWorkspace by</p>      
        <pre className="result">cd reactWorkspace/</pre>
        <a href="/imgs/VS_Code_image5.png">
      <img src={process.env.PUBLIC_URL + "/imgs/VS_Code_image5.png"} alt="Paris" />
      </a></li>
        <li><p id="subcnt">Make ReactJS Hello World Project </p>      
        <pre className="result">npm init react-app hello-world</pre>
        <a href="/imgs/VS_Code_image6.png">
      <img src={process.env.PUBLIC_URL + "/imgs/VS_Code_image6.png"} alt="Paris" />
      </a></li>
        <li><p id="subcnt">Now Go to Hello-World File </p>      
        <pre className="result">cd hello-world/</pre></li>
        <li><p id="subcnt">Now click on the App.js file to edit the html div tag according to your choice. </p>
        <a href="/imgs/VS_Code_image7.png">
      <img src={process.env.PUBLIC_URL + "/imgs/VS_Code_image7.png"} alt="Paris" />
      </a></li>
        <li><p id="subcnt"> To start the Hello World Project </p> 
        <pre className="result">npm start</pre>
        <a href="/imgs/VS_Code_image8.png">
      <img src={process.env.PUBLIC_URL + "/imgs/VS_Code_image8.png"} alt="Paris" />
      </a></li>
        <li><p id="subcnt">Then the Hello World Project runs in Browser </p>
        <a href="/imgs/VS_Code_image9.png">
      <img src={process.env.PUBLIC_URL + "/imgs/VS_Code_image9.png"} alt="Paris" />
      </a></li>
      </ol></div>
      <div className="divider div-transparent"></div>
      </div>
      </div>
    <div className="col s12 m4 l2" id="columnthree"><p>s12 m4</p></div>
   </div>
    </div>
  );
};

export const WithoutVisual = () => {
  return (
    <div className='home'>
    <div className="row">
    <div className="col s12 m4 l8" id="columntwo">
      <h1>Without Visual Studio</h1>
      <div className="wrapper">
      <article><strong>Step 1) </strong>Download Node JS</article>
      <p>You can Download Node JS from this link- <a href="https://nodejs.org/en/download/">https://nodejs.org/en/download/</a></p>
      <div className="divider div-transparent"></div>
      <article><strong>Step 2) </strong>Open Command Prompt </article>
      <p>Type cmd in search bar in windows to open command prompt</p>
      <a href="/imgs/VS_Code_image10.png">
      <img src={process.env.PUBLIC_URL + "/imgs/VS_Code_image10.png"} alt="Paris" />
      </a>
      <div className="divider div-transparent"></div>
      <article><strong>Step 3) </strong>Then write commands in Command Prompts </article>
      <div id="sublst">
        <ol type="i">
        <li><p id="subcnt">Go to the D drive</p>      
        <pre className="result">D:</pre></li>
        <li><p id="subcnt">Make ReactJS Directory </p>      
        <pre className="result">mkdir reactWorkspace</pre></li>
        <li><p id="subcnt">Change Directory to reactWorkspace by</p>      
        <pre className="result">cd reactWorkspace/</pre>
        <a href="/imgs/VS_Code_image11.png">
      <img src={process.env.PUBLIC_URL + "/imgs/VS_Code_image11.png"} alt="Paris" />
      </a></li>
        <li><p id="subcnt">Make ReactJS Hello World Project </p>      
        <pre className="result">npm init react-app hello-world</pre>
        <a href="/imgs/VS_Code_image12.png">
      <img src={process.env.PUBLIC_URL + "/imgs/VS_Code_image12.png"} alt="Paris" />
      </a></li>
        <li><p id="subcnt">Now Go to src folder in hello-world Project </p>      
        <pre className="result">cd hello-world/src/</pre></li>
        <li><p id="subcnt">Open App.js folder and edit the html div tag according to your choice</p>
        <a href="/imgs/VS_Code_image13.png">
      <img src={process.env.PUBLIC_URL + "/imgs/VS_Code_image13.png"} alt="Paris" />
      </a></li>
        <li><p id="subcnt">To start the Hello World Project ,First change the directory to- <strong>hello-world</strong>  and Run command in command prompt on hello-world folder <strong>npm start </strong> </p> 
        <pre className="result">npm start</pre>
        <a href="/imgs/VS_Code_image14.png">
      <img src={process.env.PUBLIC_URL + "/imgs/VS_Code_image14.png"} alt="Paris" />
      </a></li>
        <li><p id="subcnt">Then the Hello World Project runs in Browser </p>
        <a href="/imgs/VS_Code_image9.png">
      <img src={process.env.PUBLIC_URL + "/imgs/VS_Code_image9.png"} alt="Paris" />
      </a></li>
      </ol></div>
      <div className="divider div-transparent"></div>
      </div>
      </div>
    <div className="col s12 m4 l2" id="columnthree"><p>s12 m4</p></div>
   </div>
    </div>
  );
};

export default Overview;
