"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[36],{1036:function(n,e,r){r.r(e),r.d(e,{default:function(){return b}});var o=r(5671),t=r(3144),s=r(136),i=r(5716),u=r(364),l=r(7512),a=r(2791),c=r(885),h="Paginator_selectedPage__km1zJ",p=r(184),f=function(n){for(var e=n.portionSize,r=Math.ceil(n.totalItemsCount/n.pageSize),o=[],t=1;t<=r;t++)o.push(t);var s=Math.ceil(r/e),i=(0,a.useState)(1),u=(0,c.Z)(i,2),l=u[0],f=u[1],g=(l-1)*e+1,d=l*e;return(0,p.jsxs)("div",{children:[l>1&&(0,p.jsx)("button",{onClick:function(){f(l-1)},children:" - "}),o.filter((function(n){return n>=g&&n<=d})).map((function(e){return(0,p.jsxs)("span",{className:n.currentPage===e&&h,onClick:function(r){n.onPageChanged(e)},children:[e," "]})})),s>l&&(0,p.jsx)("button",{onClick:function(){f(l+1)},children:" + "})]})},g=r(5987),d=r(3504),C="Users_userPhoto__4q0zE",w=r(8347),P=["user"],k=function(n){var e=n.user,r=(0,g.Z)(n,P);return(0,p.jsxs)("div",{children:[(0,p.jsxs)("span",{children:[(0,p.jsx)("div",{children:(0,p.jsx)(d.OL,{to:"/profile/"+e.id,children:(0,p.jsx)("img",{src:null!=e.photos.small?e.photos.small:w,className:C})})}),(0,p.jsx)("div",{children:e.followed?(0,p.jsx)("button",{disabled:r.followingInProgress.some((function(n){return n===e.id})),onClick:function(){r.unfollowThunkCreator(e.id)},children:" Follow "}):(0,p.jsx)("button",{disabled:r.followingInProgress.some((function(n){return n===e.id})),onClick:function(){r.followThunkCreator(e.id)},children:" Unfollow "})})]}),(0,p.jsxs)("span",{children:[(0,p.jsxs)("span",{children:[(0,p.jsx)("div",{children:e.name}),(0,p.jsx)("div",{children:e.status})]}),(0,p.jsx)("span",{children:(0,p.jsx)("div",{children:"user.location.city"})})]})]},e.id)},x=function(n){return(0,p.jsxs)("div",{children:[(0,p.jsx)(f,{currentPage:n.currentPage,onPageChanged:n.onPageChanged,totalItemsCount:n.totalItemsCount,pageSize:n.pageSize,portionSize:20}),n.usersData.map((function(e){return(0,p.jsx)(k,{followingInProgress:n.followingInProgress,unfollowThunkCreator:n.unfollowThunkCreator,followThunkCreator:n.followThunkCreator,user:e})}))]})},j=r(4955),m=function(n){return n.usersPage.usersData},v=function(n){return n.usersPage.pageSize},I=function(n){return n.usersPage.totalItemsCount},T=function(n){return n.usersPage.currentPage},z=function(n){return n.usersPage.isFetching},S=function(n){return n.usersPage.followingInProgress},Z=function(n){(0,s.Z)(r,n);var e=(0,i.Z)(r);function r(){var n;(0,o.Z)(this,r);for(var t=arguments.length,s=new Array(t),i=0;i<t;i++)s[i]=arguments[i];return(n=e.call.apply(e,[this].concat(s))).onPageChanged=function(e){n.props.requestUsersThunkCreator(e,n.props.pageSize),n.props.setCurrentPage(e)},n}return(0,t.Z)(r,[{key:"componentDidMount",value:function(){this.props.requestUsersThunkCreator(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return(0,p.jsxs)(p.Fragment,{children:[this.props.isFetching?(0,p.jsx)(j.Z,{}):null,(0,p.jsx)(x,{totalItemsCount:this.props.totalItemsCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,usersData:this.props.usersData,unfollow:this.props.unfollow,follow:this.props.follow,followingInProgress:this.props.followingInProgress,unfollowThunkCreator:this.props.unfollowThunkCreator,followThunkCreator:this.props.followThunkCreator})]})}}]),r}(a.Component),b=(0,u.$j)((function(n){return{usersData:m(n),pageSize:v(n),totalItemsCount:I(n),currentPage:T(n),isFetching:z(n),followingInProgress:S(n)}}),{follow:l.ZN,unfollow:l.fv,setCurrentPage:l.D4,toggleFollowing:l.Wi,requestUsersThunkCreator:l.Zx,followThunkCreator:l.AC,unfollowThunkCreator:l.Ow})(Z)},8347:function(n,e,r){n.exports=r.p+"static/media/monkey.d68957ec289f686f5220.png"}}]);
//# sourceMappingURL=36.cd13b602.chunk.js.map