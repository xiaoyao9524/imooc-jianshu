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
      title: '社会热点',
      imgUrl: 'https://oimagec8.ydstatic.com/image?id=4446413614521923781&product=adpublish&w=360&h=360&sc=0&rm=2&gsb=0&gsbd=60'
    }
  ],
  articleList: [
    {
      id: 1,
      imgUrl: 'https://upload-images.jianshu.io/upload_images/12165040-d5f767679ae73ff4?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
      title: '这个傻B就是我老板',
      content: '这不是“朱伟老师”公众号吗？ 他怎么骂自己是傻B？ 不要怀疑！ 你没有看错！ 对的！ 伟哥就是个大傻B！ 没有盗号!没有盗号!没有盗号！ （千万...',
      scope: 5.6,
      nickName: '朱伟老师',
      commit: 11,
      like: 36
    },
    {
      id: 2,
      title: '小姨子哄她女儿睡觉，她闺女打个滚把被子掀开了！',
      content: '笑话1： 过年，两个穷叫化子一整天都没要到东西吃，半夜，又冷又饿，岁数大的那个说：“兄弟，这不行，肯定熬不过去了，咱还是出去找点吃的吧。”两人来...',
      scope: 22.1,
      nickName: '无敌大灰狼me',
      commit: 5,
      like: 52
    },
    {
      id: 3,
      imgUrl: 'https://upload-images.jianshu.io/upload_images/4346418-4c4b39d30690e845.JPG?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
      title: '写给想考普通话一级乙等的你',
      content: '刚上大学的时候，就发现一个很奇怪的现象，那就是，北方人觉得自己讲的才是纯正的普通话，而南方人则同样觉得自己讲得才是最标准的普通话。似乎所有人都觉...',
      scope: 12.2,
      nickName: '琉璃苣女孩儿',
      commit: 42,
      like: 88,
      reward: 5
    }
  ],
  columnList: [
    {
      id: 1,
      imgUrl: 'https://cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png',
      href: 'https://www.jianshu.com/mobile/club',
    },
    {
      id: 2,
      imgUrl: 'https://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png',
      href: 'https://www.jianshu.com/mobile/club',
    },
    {
      id: 3,
      imgUrl: 'https://cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png',
      href: 'https://www.jianshu.com/mobile/club',
    },
    {
      id: 4,
      imgUrl: 'https://cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png',
      href: 'https://www.jianshu.com/mobile/club',
    }
  ]
});

export default (state = defaultState, action) => {
  switch (action.type) {
    
    default: 
      return state;
  }
}