### 水吧3.0版本
vant UI库 + vue + vuex + vue-waterfall2 + swiper + less


### 1、基于水吧2.0版本进行改造，对首页修改。

### 2、增加轮播图、十大分类选项以及四大板块。
``` 
对分类接口进行改造取推荐的分类，
后三个分类一代吗形式进行固定不变，
四大板块取新品首发、福利社、每日特价以及超值专区
```
### 3、五折抢购以及品牌特惠

### 4、保持原有的横向板块

### 5、底部的精选四大板块改为为你优选

### 6、底部为你优选采用瀑布流格式布局以及加上上拉加载

##### 注释：

``` 
    分类页面商品图标字段取goodsTypeActiveUrl商品分类活动图标 
```
 
```
    商品图标字段取goodsTypeUrl商品分类图标 
```

### 配置
``` 
    轮播图配置：
        上边的轮播图位置是首页
        
        品牌特惠的轮播图配置为一级菜单
```
```
    首页十个分类页面取分类的推荐只推荐六个分类+
    热销、热销爆款以及精选图标需要加字段（后端配合）

```
#### 瀑布流插件

npm i vue-waterfall2@latest --save

``` 引用方式
import waterfall from 'vue-waterfall2'
Vue.use(waterfall)
```
 #### 参数列表

<waterfall> 属性 
| Name          |	Default	|   Type    |   Desc    |
| col           |	2	    |   Number  |   列数    |
| width         |	null	|   Number  |   宽度    |
| gutterWidth   |	10	    |   Number  |   间隔的宽度  |
| data          |	[]      |   Array   |   数据    |
| isTransition  |	true    |   Boolean |   加载图片是否使用过渡动画    |
| lazyDistance  |	300	    |   Number  |   触发图片懒加载的距离    |
| loadDistance  |	300	    |   Number  |   触发上拉加载更多的距离  |


``` 事件
| Name      |   Data    |	Desc |
| loadmore  |   null    |   滚动到底部触发 |
| scroll    |   obj     |	获取滚动时的event对象 |
```
 /*
  注意:
  1.gutterWidth需要与width一起使用才会生效，否则会进行自适应宽度(使用rem布局时，需先计算出自适应后的宽度再传值)
  2.使用了waterfall的组件不允许使用scoped,否则样式会有问题
  3.懒加载需要用lazy-src替换<img>的src属性
*/
#### 实例

<script>
import Vue from 'vue';
    export default {
        data(){
            return{
                data:[],
                col:5,
            }
        },
        computed:{
          itemWidth(){  
                return (138*0.5*(document.documentElement.clientWidth/375))  #rem布局 计算宽度
          },
          gutterWidth(){
                return (9*0.5*(document.documentElement.clientWidth/375))   #rem布局 计算x轴方向margin(y轴方向的margin自定义在css中即可)
          }
        },
        methods:{
            scroll(scrollData){
                console.log(scrollData)
            },
            switchCol(col){
                this.col = col
                console.log(this.col)
          },
          loadmore(index){
                this.data = this.data.concat(this.data)
          }
        }
    }
</script>

### 3.1版本







