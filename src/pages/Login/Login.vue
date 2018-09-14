<template>
  <section class="loginContainer">
    <div class="loginInner">
      <div class="login_header">
        <h2 class="login_logo">孟繁光外卖</h2>
        <div class="login_header_title">
          <a href="javascript:;" :class="{on:loginWay}"  @click="loginWay=true">短信登录</a>
          <a href="javascript:;" :class="{on:!loginWay}" @click="loginWay=false">密码登录</a>
        </div>
      </div>
      <div class="login_content">
        <form @submit.prevent="login">
          <div :class="{on:loginWay}">
            <section class="login_message">
              <input type="tel" maxlength="11" placeholder="手机号" v-model="phone">
              <button :disabled="!rightPhone" class="get_verification"
                      :class="{right_phone:rightPhone}" @click.prevent="getCode" >
                {{computerTime>0 ? `已发送(${computerTime}s)`:'获取验证码'}}
              </button>
            </section>
            <section class="login_verification">
              <input type="tel" maxlength="8" placeholder="验证码" v-model="code">
            </section>
            <section class="login_hint">
              温馨提示：未注册余蕾外卖帐号的手机号，登录时将自动注册，且代表已同意
              <a href="javascript:;">《用户服务协议》</a>
            </section>
          </div>
          <div :class="{on:!loginWay}">
            <section>
              <section class="login_message">
                <input type="tel" maxlength="11" placeholder="手机/邮箱/用户名" v-model="name">
              </section>
              <section class="login_verification">
                <input type="text" maxlength="8" placeholder="密码" v-if="showPwd" v-model="pwd">
                <input type="password" maxlength="8" placeholder="密码" v-else v-model="pwd">
                <div class="switch_button off" :class="showPwd ? 'on' :'off' " @click="showPwd=!showPwd">
                  <div class="switch_circle" :class="{right:showPwd}"></div>
                  <span class="switch_text">{{showPwd ? 'abc' : '...'}}</span>
                </div>
              </section>
              <section class="login_message">
                <input type="text" maxlength="11" placeholder="验证码"  v-model="captcha">
                <img class="get_verification" src="http://localhost:4000/captcha" alt="captcha"
                     @click="getCaptcha">
              </section>
            </section>
          </div>
          <button class="login_submit">登录</button>
        </form>
        <a href="javascript:;" class="about_us">关于我们</a>
      </div>
      <a href="javascript:" class="go_back" @click="$router.back()">
        <i class="iconfont icon-anniu-huitui"></i>
      </a>
    </div>
    <AlertTip :alert-text="alertText" v-show="AlertShow" @closeTip="closeTip"/>
  </section>
</template>

<script>
   import AlertTip from '../../components/AlertTip/AlertTip'
    export default {
      data(){
        return {
          loginWay :true,   //true代表短信登陆，false
          computerTime:0,  //计时初始值
          showPwd:false,   //是否显示密码
          phone:'',   //手机号
          code:'' ,   //短信验证码
          name:'',    //用户名
          pwd: '',  //密码
          captcha:'',      //图片验证码
          alertText:'' ,   // 提示文本
          AlertShow:false, //是否显示提示框

        }
      },
      computed:{
        rightPhone(){
          return /^1\d{10}$/.test(this.phone)
        }
      },

      methods:{
        //异步获取短信验证码
        getCode () {
          //如果当前没有计时
          if(!this.computerTime){
            //启动倒计时
            this.computerTime = 30

            const interalID = setInterval(()=>{
              this.computerTime--
              if(this.computerTime<=0){
                clearInterval(interalID)
              }
            },1000)



            //发送ajax请求(向指定手机号发送请求）
          }
        },


        showAlert(alertText){
          this.AlertShow=true
          this.alertText=alertText
        },

        //异步登陆
        login(){
          //前台表单验证
          if (this.loginWay){  //短信登陆
            const { rightPhone,phone, code}=this
            if(!this.rightPhone){
              //手机号不正确
              this.showAlert('手机号不正确')
            }else if(!/^\d{6}$/.test(code)){
              //验证码必须是6位数字
              this.showAlert('验证码必须是6位数字')
            }
          }else{
            const{name,pwd,captcha}=this
            if(!this.name){
              //请填写用户名
              this.showAlert('请填写用户名')
            }else if(!this.pwd){
              //请填写密码
              this.showAlert('请填写密码')
            }else if(!this.captcha){
              //请填写验证码
              this.showAlert('请填写验证码')
            }
          }
        },

        //关闭提示框
        closeTip(){
          this.AlertShow=false
          this.alertText=''
        },

        //重新获取图片验证码
        getCaptcha(event){
          //要求每次指定的src要不一样才能重新获取图片验证码
          event.target.src='http://localhost:4000/captcha?time='+Date.now()
        }

      },
      components:{
        AlertTip
      }
    }

</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .loginContainer
    width 100%
    height 100%
    background #fff
    .loginInner
      padding-top 60px
      width 80%
      margin 0 auto
      .login_header
        .login_logo
          font-size 40px
          font-weight bold
          color #02a774
          text-align center
        .login_header_title
          padding-top 40px
          text-align center
          >a
            color #333
            font-size 14px
            padding-bottom 4px
            &:first-child
              margin-right 40px
            &.on
              color #02a774
              font-weight 700
              border-bottom 2px solid #02a774
      .login_content
        >form
          >div
            display none
            &.on
              display block
            input
              width 100%
              height 100%
              padding-left 10px
              box-sizing border-box
              border 1px solid #ddd
              border-radius 4px
              outline 0
              font 400 14px Arial
              &:focus
                border 1px solid #02a774
            .login_message
              position relative
              margin-top 16px
              height 48px
              font-size 14px
              background #fff
              .get_verification
                position absolute
                top 50%
                right 10px
                transform translateY(-50%)
                border 0
                color #ccc
                font-size 14px
                background transparent
                &.right_phone
                  color:  black
            .login_verification
              position relative
              margin-top 16px
              height 48px
              font-size 14px
              background #fff
              .switch_button
                font-size 12px
                border 1px solid #ddd
                border-radius 8px
                transition background-color .3s,border-color .3s
                padding 0 6px
                width 30px
                height 16px
                line-height 16px
                color #fff
                position absolute
                top 50%
                right 10px
                transform translateY(-50%)
                &.off
                  background #fff
                  .switch_text
                    float right
                    color #ddd
                &.on
                  background #02a774
                >.switch_circle
                  //transform translateX(27px)
                  position absolute
                  top -1px
                  left -1px
                  width 16px
                  height 16px
                  border 1px solid #ddd
                  border-radius 50%
                  background #fff
                  box-shadow 0 2px 4px 0 rgba(0,0,0,.1)
                  transition transform .3s
                  &.right
                    transform translateX(30px)
            .login_hint
              margin-top 12px
              color #999
              font-size 14px
              line-height 20px
              >a
                color #02a774
          .login_submit
            display block
            width 100%
            height 42px
            margin-top 30px
            border-radius 4px
            background #4cd96f
            color #fff
            text-align center
            font-size 16px
            line-height 42px
            border 0
        .about_us
          display block
          font-size 12px
          margin-top 20px
          text-align center
          color #999
      .go_back
        position absolute
        top 5px
        left 5px
        width 30px
        height 30px
        >.iconfont
          font-size 20px
          color #999
</style>
