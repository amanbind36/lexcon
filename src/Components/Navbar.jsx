import React from 'react'
import "./navbar.css"
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  } from '@fortawesome/free-solid-svg-icons'
const Navbar = () => {
  return (
    <div className='container'>
     <div className='upper'>
       <div><h3>Lexcon-Watch Store WooCommerce Theme</h3></div>
       <div>
       <i class="fa-light fa-computer"></i>
       <i class="fa fa-desktop" aria-hidden="true"></i>
       <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJIAAACSCAMAAACZpWO8AAAAV1BMVEX///8AAABkZGTPz8/q6urT09NPT0/8/PxISEguLi4FBQX5+fl+fn6zs7MLCwteXl69vb3Hx8cnJyfa2tqpqakXFxeLi4uZmZl4eHhYWFhBQUHk5OQ2NjYjXKryAAACEklEQVR4nO2a23KCMBRFDyKmJhYKIgj6/9/ZhJsk2ub0gTPtdC/H4ZI4WZMc8CGbCAAAAAAAAAAAAAAAACIoUorIkDL7CEaRURb7k+2lrJUpm+5toe/9o6NrSuPstxcajGh/qpIo1Wk/+m+tZOzntrMj6nFg7ZgtHhfDcXcbugsomcYOmeeTRTg5s2puTxojoOSq9Vwlq6mpTu8rHivqOlTn6XnYWqn1ZqXwpsEUXmNLEk8c0dUb9V6n2UJa373Gq4COm6fdetA8rCXvxk5kjhQVocXXFCIvyh8rbS2lxoWrjgyqceEk5skq1RmDWq6WrFJGsVegbc6ElaJDKWGlNPZ36lpTUaWS07OUrqXIWEq6llJOT9mFg1IEKHGAEgcocYASByhxgBIHKHGAEgcocYASByhxgBIHKHGAEgcocYASByhxgBIHKHGYdwfi/PudppIimyiuUXZbp+8O3eFbbIdeUukp1fEaLaKkwpyAHXeVDMgDW4nt5udNeWehLwPa97N0QgsX5AR0cmw+BppjuKQS0YWngIeTaKfdcNOG4SGZ8g5jMDq5LDu95SVQugqVtxcW0raA6rm11on2nFqX5BNQ8iJV7nCvzwNDUmgVSJOJVD2CZ4uSk8udQT7O2XRfLHi2xPO8UN6rM7l43i8MMVIQ9TxM3/BCLuo5VqviBWKVUCAWAAAAAAAAAAAAAADw5/kERlkfZ5lu84IAAAAASUVORK5CYII='/>
       <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH0AAAB9CAMAAAC4XpwXAAAAWlBMVEX///8AAABLS0soKCi+vr4sLCz5+fmWlpbj4+Pd3d2hoaFUVFQdHR319fVycnLt7e08PDxhYWGQkJCKioq3t7fFxcWoqKhnZ2cUFBTLy8tCQkKxsbHU1NR/f392RhKkAAABYElEQVRoge3byY6DMBBFUTtgwkzmgU7+/zdbanVEFhVblHHY3Leu8pFAslfPmECqummtJm1TV6HDA+l6lfxK38Xgg4vCrXWDHi92kbi1u0KtH6Nxa49avBSPO2w/5SDOl0q9FnHPwlZaqJX6Xjrs7lm4Swt7pb6RDjt5Fk7SwmZJfeyKT+nG5PrsoKPP19tzrsu5XUDPlNvGZOjo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6OjoCXWn1t0CunXa2CX0yKCjoy+kj5efS3AokZ49/qYegVZLGj171THKbAV9qjCIhYW0uptKSJ332yfRr2+D16/r/dugt8qVRG+mAlTRfF23U/mt8s6l0acOkPe3p7ptnv9jT/9YqpvW5UMx5KECX7pX5tbegjNaXeyIzY62Iyb242ZH24+Tu4Fzo+0GrtuLXLkTagb/0x1OTB925S6wSdyD/gUM6RpcEfWuEAAAAABJRU5ErkJggg=='/>
        <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHwAAAB8CAMAAACcwCSMAAAAYFBMVEX////6+voAAACKjI3Pz9BTU1OEhoYjIyO5ubnIyMhaW1v09PSXmJjr6+u9vr7W2NguLy9CQkI3NzdhYmNoaWmzs7ORkpOmqKgoKCcdHh4TFhcICgt7fHysra7h4uKcnp/5UYBzAAACEElEQVRoge2a2ZKCMBBFYwQZdgQVXOf//3K0Jp2wR5HGKuueN4NyyGKHqlwhAAAAAPCFhKnDQBrazc4mO0sWztnFGVX7Lo+YcP1B9erCq35wWQ24t/xuKbf99nwJt5R5n7tYxi1l0XXvl3JLuW+7w0xfy3cbBnZmVrP2X/5qnuuJajCF0IzttXVJr/RYrJgQMTm2TfftpNodNvfd7ijJ6daQJ6o5YHTf7YHSJA05TfmeV07T3pz0wwKjXhv3Q0O+Xla+hhxyyCGHHHLIIYcccsghhxxyyCGHHHLIIYcccsgh/wZ5pFp9XrmvNFFDTmdOv7xy6mPzKJceKeeV53qA64SVaj5wHmfS6V3VOiveqXZZCia9ECU5dk23HncpCz/mcMe+iSZ0MiOBviQzlwETDpBB2y1SuRhpR25mhJuy6zYnycys+9ymzLES9bvvS549p5MPh6NEWHqcaq+0JFH8qPBGqY50r9PjIyU95LEa/10RjfT6aahYnP8/UnyuJ3U0P7oWqtSFjvfM0TEblNfLVLZsRbXL5XfTy4ipFbo6jacM54A6nuuFG+ZLdV1vAbWcjZ71nqI9K7T51dOEOr/Y3a7eJvYNupMXxzQ6Orh5rX01nsOd0BvWi1SJ/d42btPUD272u1tY2yVDDGyeLxDYJUO8v/4+2vOPzrlIJm7x3gyr/V4+k58JJEwJVgAAAFb+AHptRENXjRBoAAAAAElFTkSuQmCC'/>
        
       </div>
       <div>
        <button>Add to CArt</button>
       </div>
     </div>
     <div className='mid'>
     <div><p>Save your valuable time for add money with watches, try the Watches today just for $59.</p></div>
       
     </div>
     <div className='middle'>
         <div  style={{marginTop:"50px",marginLeft:"30px"}}>
            <input style={{padding:"10px"}} type="text" placeholder='Search Products'/>
         </div>
         <div className='i'>
            <img src='https://capricathemes.com/wordpress/WCM03/WCM030073/wp-content/themes/lexcon/images/codezeel/logo.png'/>
         </div>
         <div className='left' style={{display:"flex"}}>
         <div> <img width="80px" src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIkAAACJCAMAAAAv+uv7AAAAY1BMVEX///8AAAD6+vqGhoawsLDFxcXX19fp6emrq6v39/eQkJB1dXW3t7fQ0NDa2toODg5oaGjj4+OlpaUbGxsmJiaZmZlISEg5OTm9vb0VFRVgYGBDQ0N7e3ufn59bW1stLS1RUVEOCsBAAAAEK0lEQVR4nO1aW4OyIBDdvJGUl7Ysy1r7/7/y27ZlGKx0hKH9HjivIhxhOHPz4yMgICAgICAgICAg4O+QZ+uLlPKSZPkfsiiTc7VAWCXZX9AQyd6g8YNqvxRv5pE3uwcad+yatx7T5QWNO5q38Siuo0QWi33xHiLLCR43fL6BR1QTiCwWJ+/Wkn89LLrt+377cI+unqlEe3O9Pl4XpRCiLNbyYD46eKUSGbZ6kKZ4CJOM111Z4UO5PIqYuGCZqf0RSdAyq+diKs5ozNIXkZK0SIKM15MfitC1GZOu4qhNJfLCBCnaZnTgRg/0o3AwfTUl5mhXfGzK54wP1abtwRvmoBWUywnXveePV1r4TMrcAi7Qmp3JSU0tScMbNfyLm8hmO2+7hTrMbcnMZK2+8Ux8IfZ1PFJNTP3Eci51KpRn25EFAo6Hmcn8L4Tj4SUi5ss3OIdx1zAXqZq29fkKBXB16PlDpsQtYWWiHElFV4eNcoO88ZI69CP90MXWC5P/Z08s7KRQr/DaCUxL125w3ikrE9ATeuQDkRWvnoDG0nMYCJaYA0jlRSrqvBGEEbxEtC+mmmymXoiZmYD9UY8Hihu8Yv9tsv3vxMQYbANhBLPBom9ckYZDTHDiJqJdKynZ1Sk0r5rckHdqbkqyCyl056GIovO66dsAN81PYqyrEVM+TZOufBDRXnDq8As9kD8D/AGqbY3tCqo8+apvCVQtil+ZbRTrQdzOT6NFi1yfy36G67Xc8orQoGUW9aOwlLg4SczlLWGsVJ3aXB9SlKf1ET+mibE1hlX7k1ymWZmlS1kPCuYeq7F3nBc0eN6RG5ppFjcb8VP/NJH2kzx2/H7vGcT0Ab0opTPziLeTRL6vVeybSz7ei8SQXvs76WGaAaD35P4+Bi6FgpWnbSmeNKu7WspmmSwbKev94+OjlzuUDFapurgVhtqLNH7o8HtoNsnBEvK5Ly6GwsedeA26xNcxY2zNRu6JVW0jQ8y6dnzyqO3wcFa7NYKBhvCRhuwwOkO8IydiB6H2QQX/0hBTtzrCJs6U9aRoyjk1M5SV8ES0Qnu8ap5QocbkkcMh1rZEDCoMrS9y5veUCj2DnYTQAZrNWWsbc67o6Ats17vS7tsx1tcVGdvakDYzt9+oQFxntA5M6KvntCl6S+y1SeuiS78WtuTgMEnHsClQynSq28H9cWhiQxPg6kAElf8u1lNsObYEVbusq27wb03nFnbpf89sj6dx39U74JQtazs6dnUVauhTWca0QnlSlyt8B1xku+AAOjSuh4PUzU7xP91exyjcPkqZycE93hLqeOwCJvU2R4dG/eXU2bwMv41x5AjKgVn9NAvRGkeBV2ViVpEbxKAc6T4UGmys36KB/xpOrf3U5eUhCpfJyviOM0drRJx/Z+P+zy4gICAgICAgICAg4I5/7tEmZgN0dXwAAAAASUVORK5CYII='/></div>
           <div> <h3>My Account</h3>
        <p>Register - Login</p></div>
       
         </div>
         <div>
            <img width="80px"  src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH4AAAB+CAMAAADV/VW6AAAAZlBMVEX///8AAADq6uo2Njbw8PDm5ubt7e3d3d3z8/M6Ojo9PT0yMjIrKyvg4ODZ2dnHx8cUFBSbm5sfHx/S0tKwsLAkJCS7u7sNDQ16enqjo6OpqalsbGyGhoZfX19zc3ORkZFTU1NGRka8PuxVAAAEuElEQVRoge1aa7drMBBthVIULaoPffj/f/K2mQkOCYmErruW/fGQjMzs7J1Mz2azYsWKFStWrPg5dm4cn8/nOHU8+UGek9JBsbvTCG3H5ZsUW0Be3bODzKhDdq9yHFSQdxnbk4LHl9O2i/d1ZC77+u4NOl1i5eA30psGUDriQU4pGERuSsHjUDAP/QDRKFHwL0L5DOyerWHV41mWl/vbL+q/Ee5UcStf/vt+Kcvno2ot4ylJwzRgI6pjajHC2272SNiDY3/UkT1LHpnLGOJZ6bFiD4JUJvq5/tze686VfcCj++jBgl973EjrZGbj0dkqLnyKXbEG5I8MeJj44sod5FzEWeNGJ5HoBQ+n8lultPb4yUJpiohU/Bu8dR/a3hkSw2J/cKrx3Np3eGdwB0bwzmv4G2MoQIXrtyB6MsIs3JbCtH4SG8pVyAUG+jTXWPfEHRsFdQ3F3gEUFcpKAwu+M//UyIZPCa3xUS/YUKLHMdR9fJ5PuXPkn+XDhwxIcQOov0D/PL/L6AFY4EcV1l0q+mbnNzXrIRv6th4OLT88STnxhuWXv0NoPS+SE33i58rRNxsqGiHvCYitBIMYHPQTuboDLDrizHlyV1t8HV8lOi6fw25vTBR48U/SrGMAYeuTj7IiV5rqy79xtekg5/P7JaV3vfjyrEMc+apODVvqQKAHmuXeccH7buPTtDOxEnY0ULf4zvejgvmjbzb0KNfla8rNyRzgVjmWdhtd3HnUPyuLzlRceLp3lnR6fZS88PHgScAknrzk/5h6Lj08LBGeHlC6Um1PkfxJoKLf1TeP+1EzANLcs7yn+BhkFBmf49lC3Hvwl+kIzgGGAacazhGFFl+tCTIBN9EOuy7iedTveNfw3XaB5cMNmnuToWKcKJy01WElYms5FLPrPt3dheB8+Jo7/ZB6UffAgx7JbOdNOOPvhZsbboBb5cOzHEBZhu6w0IAo1O46koigJTN4lYCGcDhD/AgupMOy7mF849aH0d8jr+2wUaR2cRyFAx0gMto6sf0Z+HeAOX2JW5SHzSKD9Y9OI1uuDVx/YCw+1l1m7V9AA2obGsq/i004aTfZYYvYiP1AO2dLFCbD+ovMQQXuVqHunfj6+hPlE6Ib4x+ybq/8cyLyL9fKP7Y+5VnXwAb+FRr6hx43rnU8wMVHolEvAnqcat3r+Hut+mPdg8n9KqY/k9bPtE5DPFB/ThPqzzxOS7q8qf6HHrfX7BQy/1PMP3oc0e5TelP0Jw01dtxfWOr+hx63N2JZyL9CejL0uMDQfU3R/9Dj9Otex98r+B963HS16QP1J5DgP/M4ozdl6R8r0eOI4YO6JP8cs6xrgPw7DeY/SgyzrhWfjOoP1j2c5TcZa4x/GF3PZQbio/8JpkePCwyzrgGev/j3T/S4wIDOizDgf6g2c7CuAa6//381UTD72r9g/Ovk/4BaN1vd6/iwzOTPMi0404azR6/r3+YfNCRnrnsdn3T2v/aJWg2o/wTju8EMHjcE1B8oNf4Lj2mPG0LL/5B1cyktH1j//HBYQm2E8QlZlHUN2L8ILss6Xvxl686A/dfF684A/qN7i9SIH/yCdQ0s8pu6MzgLat2KFStWrFjx/+If+Css0TWljr0AAAAASUVORK5CYII='/>
            <img width="80px" src='data:image/png;base64,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'/>
         </div>
     </div>
     <div className='low'>
        <div>
            <p>Home</p>
            <p>Shop</p>
            <p>Blog</p>
            <p>media</p>
            <p>ShortCode</p>
            <p>Features</p>
            <p>Sitemap</p>
        </div>
     </div>
    </div>
  )
}

export default Navbar