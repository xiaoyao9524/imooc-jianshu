import { fromJS } from 'immutable';

const defaultState = fromJS({
  topicList: [
    {
      id: 1,
      title: '社会热点',
      imgUrl: 'https://oimagec8.ydstatic.com/image?id=4446413614521923781&product=adpublish&w=360&h=360&sc=0&rm=2&gsb=0&gsbd=60'
    },
    {
      id: 2,
      title: '手绘',
      imgUrl: 'https://upload-images.jianshu.io/upload_images/7632491-745b5e867908fd3f.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    }
  ]
});

export default (state = defaultState, action) => {
  switch (action.type) {
    
    default: 
      return state;
  }
}