const Q_3Comp=()=>{

    const images=[
        {
            image:"https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80",
            
    
        },
        {
         image:"https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg",
       
        },
        {
         image:"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
        
        }
     ]
    return(
        <>
        <h1>Image Gallery</h1>
        {images.map(item=>(
            
        <div>
 <div className="card">
  <img src="item.image" className="card-img-top" alt="not found"></img>
 
  </div>
</div>



      

))}

        </>
    )
}
export default Q_3Comp