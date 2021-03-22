    let camera;
    
         start = ( ) => {
            let scene = new THREE.Scene();
            const WIDTH = window.innerWidth
            const HEIGHT = window.innerHeight
            const FOV = 45;
            const NEAR = 1;
            const RENDER_DISTANCE = 10000;
            let camera = new THREE.PerspectiveCamera(FOV, WIDTH/HEIGHT, NEAR, RENDER_DISTANCE)
            let RENDERER = new THREE.WebGLRenderer({
                antialias : true,
            });
    

            let earthTexture = new THREE.TextureLoader().load('/earth.jfif')
            let earthMaterial = new THREE.MeshBasicMaterial({
                map: earthTexture
            });

            camera.position.z = 200
            RENDERER.setSize(WIDTH, HEIGHT)
            document.getElementById('pocketstudio').appendChild(RENDERER.domElement)
            RENDERER.setClearColor(0x000000)
    
            let geometry = new THREE.BoxGeometry(2000,2000,2000)
            let sGeometry = new THREE.SphereGeometry(80,80,80)



            let greenWireframe = new THREE.MeshBasicMaterial({
                color: 0x12F8AF,
                wireframe : true,
            });
            let redWireframe = new THREE.MeshBasicMaterial({
                color: 0x12F8AF,
                wireframe : true,
            });


            const spotLight = new THREE.SpotLight( 0xffffff );
            spotLight.position.set( 100, 100, 100 );


     
            let cube = new THREE.Mesh(geometry, greenWireframe)
            let sphere = new THREE.Mesh(sGeometry, earthMaterial)
            sphere.position.set(82,0,100)
            scene.add(sphere, spotLight)
            RENDERER.render(scene,camera)
    
            const render = () => {

            RENDERER.render(scene,camera)
                cube.rotation.x += 0.003;
                cube.rotation.y += 0.003;
                cube.rotation.z += 0.003;
                // sphere.rotation.x += -0.001;
                // sphere.rotation.y += 0.001;
                sphere.rotation.z += -0.003;
                requestAnimationFrame(render)            
                
            }
            render()
        

			
            
            document.onmousemove = (e) => {
                // console.log(e)
                // camera.position.x += e.movementX / 3
                // camera.position.y += e.movementY / 3
                cube.rotation.x += 0.01;
                cube.rotation.y += 0.01;
                cube.rotation.z += 0.01;
                cube.rotation.x += -0.005;
                sphere.rotation.y += -0.005;
                sphere.rotation.z += -0.005;
            }
    
            // const loader = new THREE.FontLoader()
        
        }
    
     window.onload = start 
     window.onresize = function() {
         window.location.href = window.location.href 
     }
