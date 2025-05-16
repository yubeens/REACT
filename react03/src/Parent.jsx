import Food from "./Food.jsx";
import food from "./Food.jsx";
import Food1 from "./Food1.jsx";

const Parent = () => {
    let comments=["comment01","comment02","comment03"]
    const foodLike=[
        {
        id: 1,
        name: 'Kimchi',
        image: 'http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg',
        rating: 5,
    },
        {
            id: 2,
            name: 'Samgyeopsal',
            image:'https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg',
            rating: 4.9,
        },
        {
            id: 3,
            name: 'Bibimbap',
            image:'http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb',
            rating: 5,
        },
        {
            id: 4,
            name: 'Doncasu',
            image: 'https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg',
            rating: 5,
        },
        {
            id: 5,
            name: 'Kimbap',
            image: 'http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg',
            rating: 5,
        },

    ]
  return(
      <div>
          {comments}
          <hr/>
          {/*map 사용하여 출력*/}
          {
              comments.map((comment,i)=>{
                  return(
                      <div key={i}>{comment}</div>
                  )
              })
          }
          <hr/>
          {
              comments.map((comment,i)=>( //return 생략 시 소괄호
                  <div key={i}>{comment}</div>
              ))
          }
          <hr/><hr/><hr/>
          {
              comments.map((comment,i)=>(
                  <Child comment = {comment} key={i}/>
              ))
          }
          <hr/><hr/>
          {
              foodLike.map((food)=>{
                  return(
                      <Food food={food} key={food.id}/>

                  )
              })
          }
          <p/><p/>
          {
              foodLike.map(food=>(
                  <Food1 key={food.id}
                         id={food.id}
                         name={food.name}
                         picture={food.image}
                         rating={food.rating}/>
              ))
          }
      </div>
  )

}
export default Parent;
