export default {

    name:'event',
    type: 'document',
    title:'event',
    fields:[
        {
            name:'name',
            type: 'string',
            title:'Evenet name'
        },
        {
            title: 'Description',
            name: 'description',
            type: 'text'
          },
          {
            title:'start date',
            name:'StartDate',
            type:'date',
            placeholder:'start date of event'
          },
          {
            title:'end date',
            name:'EndDate',
            type:'date',
            placeholder:'end date of event'
          },
          {
            title:'cover image',
            name:'Image',
            type:'image',
            options:{
                hotspot:true
            }
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
          }
    ]
}