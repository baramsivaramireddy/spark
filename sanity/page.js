
import { FaFileImage } from "react-icons/fa6";
export default{

    title:'pages',
    type:'document',
    name:'page',

    fields:[
        {
            title:'Name',
            type:'string',
            name:'name'
        },
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
              source: 'name',
              maxLength: 200, // will be ignored if slugify is set
              slugify: input => input
                                   .toLowerCase()
                                   .replace(/\s+/g, '-')
                                   .slice(0, 200)
            }
        },
        {
            title: 'Content', 
            name: 'content',
            type: 'array', 
            of: [
                {type: 'block'},
                {type: 'image', icon: <FaFileImage />}
              ]
          }
    ]

}