(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[192],{5660:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contacts",function(){return t(6001)}])},2096:function(e,s){"use strict";s.Z={src:"/_next/static/media/team.05c6cbb9.jpg",height:859,width:1440,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAABnhf/xAAWEAEBAQAAAAAAAAAAAAAAAAACAxP/2gAIAQEAAQUCDpl//8QAFREBAQAAAAAAAAAAAAAAAAAAAAH/2gAIAQMBAT8Br//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Bf//EABcQAAMBAAAAAAAAAAAAAAAAAAABAhH/2gAIAQEABj8CrbZ//8QAFxABAQEBAAAAAAAAAAAAAAAAARExAP/aAAgBAQABPyFwrmNzv//aAAwDAQACAAMAAAAQ/wD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/ED//xAAVEQEBAAAAAAAAAAAAAAAAAAABAP/aAAgBAgEBPxBC/8QAGRABAAIDAAAAAAAAAAAAAAAAAQARITGx/9oACAEBAAE/EGEyNRwt7P/Z",blurWidth:8,blurHeight:5}},9850:function(e,s,t){"use strict";var n=t(5893),a=t(3769),r=t.n(a),o=t(7536),_=t(512),i=t(7421),l=t(6115),c=t.n(l),m=t(7066),A=t(4853);s.Z=e=>{let{className:s}=e,{t}=(0,i.$G)(),{register:a,handleSubmit:l,formState:{errors:d},setValue:u}=(0,o.cI)({defaultValues:{name:"",phone:"",description:""}}),h=async e=>{try{await m.Z.post("https://dev.dr-isaenko.com/api/form-handler.php",e,{headers:{"Content-Type":"application/x-www-form-urlencoded"}})}catch(e){}finally{alert(t("form:successSend")),window.dataLayer.push({event:"form_contact"})}};return(0,n.jsx)("div",{className:(0,_.Z)(r().form,s),children:(0,n.jsxs)("div",{className:r().container,children:[(0,n.jsx)("div",{className:r().lines}),(0,n.jsxs)("div",{className:r().left,children:[(0,n.jsxs)("div",{className:r().leftTop,children:[(0,n.jsx)("p",{dangerouslySetInnerHTML:{__html:t("form:title")},className:r().leftTopTitle}),(0,n.jsx)("p",{dangerouslySetInnerHTML:{__html:t("form:subtitle")},className:r().leftTopDescription})]}),(0,n.jsx)("p",{dangerouslySetInnerHTML:{__html:t("form:warning")},className:r().leftBottom})]}),(0,n.jsx)("div",{className:r().right,children:(0,n.jsxs)("form",{action:"#",onSubmit:l(h),children:[(0,n.jsx)("input",{type:"text",placeholder:t("form:inputs:0"),...a("name",{maxLength:{value:120,message:t("form:maxLength:0")},required:t("form:required")})}),d.name&&(0,n.jsx)("p",{className:r().error,style:{color:"red",fontSize:"20px"},children:d.name.message}),(0,n.jsx)("input",{type:"text",placeholder:t("form:inputs:1"),...a("phone",{minLength:{value:10,message:"".concat(t("form:format")," 09XXXXXXXXX")},maxLength:{value:10,message:"".concat(t("form:format")," 09XXXXXXXXX")},required:t("form:required")})}),d.phone&&(0,n.jsx)("p",{className:r().error,style:{color:"red",fontSize:"20px"},children:d.phone.message}),(0,n.jsx)("textarea",{type:"text",placeholder:t("form:inputs:2"),...a("description",{maxLength:{value:300,message:t("form:maxmaxLength:1")},required:t("form:required")}),className:c().className}),d.description&&(0,n.jsx)("p",{className:r().error,style:{color:"red",fontSize:"20px"},children:d.description.message}),(0,n.jsx)(A.Z,{sitekey:"6Lf5OSwqAAAAAKSvDliHvoFk5dmKNvIDC8VhYEcu",onChange:e=>{u("recaptcha",e)},className:r().recaptcha}),(0,n.jsx)("button",{dangerouslySetInnerHTML:{__html:t("form:inputs:3")},className:r().submit,type:"submit"})]})})]})})}},1943:function(e,s,t){"use strict";var n=t(5893),a=t(7421),r=t(9478),o=t(8849),_=t.n(o),i=t(7294),l=t(512),c=t(3324),m=t(6115),A=t.n(m);let d=[{question:"faq:questions:0",answer:"faq:answers:0"},{question:"faq:questions:1",answer:"faq:answers:1"},{question:"faq:questions:2",answer:"faq:answers:2"},{question:"faq:questions:3",answer:"faq:answers:3"},{question:"faq:questions:4",answer:"faq:answers:4"},{question:"faq:questions:5",answer:"faq:answers:5"},{question:"faq:questions:6",answer:"faq:answers:6"},{question:"faq:questions:7",answer:"faq:answers:7"}];s.Z=e=>{let{style:s,className:t}=e,[o,m]=(0,i.useState)(null),{t:u}=(0,a.$G)(),h=e=>{m(o===e?null:e)};return(0,n.jsx)("section",{style:s,className:(0,l.Z)(_().TabsQa,t),children:(0,n.jsxs)(r.Z,{className:_().container,children:[(0,n.jsx)("h3",{className:A().className,dangerouslySetInnerHTML:{__html:u("faq:title")}}),(0,n.jsx)("div",{className:_().tabsSection,children:d.map((e,s)=>(0,n.jsxs)("div",{onClick:()=>h(s),className:"".concat(_().faqItem," ").concat(o===s?"".concat(_().open):""),children:[(0,n.jsxs)("button",{className:(0,l.Z)(_().faqQuestion,A().className),children:[(0,n.jsx)("span",{dangerouslySetInnerHTML:{__html:u(e.question)}}),(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",fill:"none",children:(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M18.9964 3.23235L16.9372 3.29187L16.7144 11.0001L9.00622 11.2229L8.94671 13.2821L16.6549 13.0593L16.4321 20.7675L18.4914 20.708L18.7141 12.9998L26.4224 12.777L26.4819 10.7178L18.7737 10.9406L18.9964 3.23235Z",fill:"#5A6DB4"})})]}),(0,n.jsx)(c.E.div,{initial:{height:0,opacity:0},animate:{height:o===s?"auto":0,opacity:o===s?1:0},transition:{duration:.3},style:{overflow:"hidden"},children:(0,n.jsx)("p",{dangerouslySetInnerHTML:{__html:u(e.answer)},className:_().faqAnswer})})]},s))})]})})}},6001:function(e,s,t){"use strict";t.r(s);var n=t(5893),a=t(7210),r=t.n(a),o=t(7421),_=t(9478),i=t(512),l=t(9850),c=t(6304),m=t(1943),A=t(2962);s.default=()=>{let{t:e}=(0,o.$G)();return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(A.PB,{title:e("head:pages:5"),description:e("head:main:2"),openGraph:{url:"https://dr-isaenko.com",title:e("head:main:0"),description:e("head:main:2"),images:[{url:"/baghe_ua.jpg",width:1680,height:960,alt:"business card"}],site_name:e("head:main:0")},additionalLinkTags:[{rel:"icon",href:"/favicon32.png",sizes:"32x32"},{rel:"icon",href:"/favicon150.png",sizes:"150x150"}]}),(0,n.jsxs)("main",{style:{background:"#FBF2EF"},children:[(0,n.jsx)("section",{className:r().contacts,children:(0,n.jsxs)(_.Z,{className:r().container,children:[(0,n.jsx)("h2",{dangerouslySetInnerHTML:{__html:e("header:menu:4")}}),(0,n.jsxs)("div",{className:(0,i.Z)(r().box,r().box1),children:[(0,n.jsxs)("div",{className:r().left,children:[(0,n.jsx)("p",{dangerouslySetInnerHTML:{__html:e("header:kharkiv")},className:r().city}),(0,n.jsxs)("div",{className:r().col,children:[(0,n.jsx)("p",{className:r().title,dangerouslySetInnerHTML:{__html:e("footer:schedule:0")}}),(0,n.jsxs)("div",{className:r().scheduleBlock,children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{dangerouslySetInnerHTML:{__html:e("footer:schedule:1")}}),(0,n.jsx)("p",{children:"10:00 - 20:00"})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{dangerouslySetInnerHTML:{__html:e("footer:schedule:2")}}),(0,n.jsx)("p",{children:"10:00 - 18:00"})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{dangerouslySetInnerHTML:{__html:e("footer:schedule:3")}}),(0,n.jsx)("p",{children:"11:00 - 16:00"})]})]})]}),(0,n.jsxs)("div",{className:r().col,children:[(0,n.jsx)("p",{className:r().title,dangerouslySetInnerHTML:{__html:e("contacts:mobile")}}),(0,n.jsx)("div",{className:r().scheduleBlock,children:(0,n.jsx)("a",{href:"tel:+380663777908",children:(0,n.jsx)("span",{children:"+38 (066) 377-79-08"})})})]}),(0,n.jsxs)("div",{className:r().col,children:[(0,n.jsx)("p",{className:r().title,dangerouslySetInnerHTML:{__html:e("contacts:email")}}),(0,n.jsx)("div",{className:r().scheduleBlock,children:(0,n.jsx)("a",{href:"mailto:dr.isaenko.clinic@gmail.com",children:(0,n.jsx)("span",{children:"dr.isaenko.clinic@gmail.com"})})})]})]}),(0,n.jsx)("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5129.001484273615!2d36.254566311836264!3d50.001969065639386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4127a1063384f5df%3A0xe922fc15147c8904!2zZHIuSXNhZW5rbyDQutC70LjQvdC40LrQsCDQvNC10L3RgtCw0LvRjNC90L7Qs9C-INC30LTQvtGA0L7QstGM0Y8!5e0!3m2!1sru!2sua!4v1723821550897!5m2!1sru!2sua",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade",style:{border:0,width:"100%",maxWidth:"100%"}})]}),(0,n.jsxs)("div",{className:r().box,children:[(0,n.jsxs)("div",{className:r().left,children:[(0,n.jsx)("p",{dangerouslySetInnerHTML:{__html:e("header:kyiv")},className:r().city}),(0,n.jsxs)("div",{className:r().col,children:[(0,n.jsx)("p",{className:r().title,dangerouslySetInnerHTML:{__html:e("footer:schedule:0")}}),(0,n.jsxs)("div",{className:r().scheduleBlock,children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{dangerouslySetInnerHTML:{__html:e("footer:schedule:1")}}),(0,n.jsx)("p",{children:"10:00 - 20:00"})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{dangerouslySetInnerHTML:{__html:e("footer:schedule:2")}}),(0,n.jsx)("p",{children:"10:00 - 18:00"})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{dangerouslySetInnerHTML:{__html:e("footer:schedule:3")}}),(0,n.jsx)("p",{dangerouslySetInnerHTML:{__html:e("footer:schedule:4")}})]})]})]}),(0,n.jsxs)("div",{className:r().col,children:[(0,n.jsx)("p",{className:r().title,dangerouslySetInnerHTML:{__html:e("contacts:mobile")}}),(0,n.jsx)("div",{className:r().scheduleBlock,children:(0,n.jsx)("a",{href:"tel:+380978888911",children:(0,n.jsx)("span",{children:"+38 (097) 88-88-911"})})})]}),(0,n.jsxs)("div",{className:r().col,children:[(0,n.jsx)("p",{className:r().title,dangerouslySetInnerHTML:{__html:e("contacts:email")}}),(0,n.jsx)("div",{className:r().scheduleBlock,children:(0,n.jsx)("a",{href:"mailto:dr.isaenko.clinic@gmail.com",children:(0,n.jsx)("span",{children:"dr.isaenko.clinic@gmail.com"})})})]})]}),(0,n.jsx)("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10166.439091932467!2d30.471987261305067!3d50.429741778358206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf578ffd1a35%3A0x2e9da363cab76eb3!2z0JrQu9C40L3QuNC60LAg0LzQtdC90YLQsNC70YzQvdC-0LPQviDQt9C00L7RgNC-0LLRjNGPIERyLiBJc2Flbmtv!5e0!3m2!1sru!2sua!4v1723879995565!5m2!1sru!2sua",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade",style:{border:0,width:"100%",maxWidth:"100%"}})]})]})}),(0,n.jsx)(l.Z,{className:r().form}),(0,n.jsx)(c.default,{className:r().team})]}),(0,n.jsx)(m.Z,{className:r().tabs})]})}},6304:function(e,s,t){"use strict";t.r(s);var n=t(5893),a=t(9478),r=t(6454),o=t.n(r),_=t(7421),i=t(2096),l=t(5675),c=t.n(l),m=t(512);s.default=e=>{let{className:s}=e,{t}=(0,_.$G)();return(0,n.jsx)("section",{className:(0,m.Z)(o().OurTeam,s),children:(0,n.jsxs)(a.Z,{className:o().container,children:[(0,n.jsx)("h2",{dangerouslySetInnerHTML:{__html:t("team:teamTitle")}}),(0,n.jsx)(c(),{src:i.Z,objectFit:"cover",layout:"responsive",alt:"team",quality:100})]})})}},3769:function(e){e.exports={ubuntu:"Form_ubuntu__xtVpY",Manrope:"Form_Manrope__HQtIN",ukr:"Form_ukr__Sl0sp",flex:"Form_flex__lcgHF","justify-start":"Form_justify-start___Tr_4","justify-center":"Form_justify-center__qPSvf","justify-end":"Form_justify-end__Mzzgw","align-center":"Form_align-center__ll2xg","align-start":"Form_align-start__dG3mI","align-end":"Form_align-end__oEgCl","direction-column":"Form_direction-column__WKELr","justify-between":"Form_justify-between__UKqqU",dark:"Form_dark__5lcy7",white:"Form_white__Vcbhq","border-none":"Form_border-none__wzf8r","width-f":"Form_width-f__IOiAQ","mr-0":"Form_mr-0__9PkmQ",form:"Form_form___7H3G",container:"Form_container__z2Vw_",lines:"Form_lines__BIzpL",left:"Form_left__ImcuL",leftTop:"Form_leftTop__xQD_c",leftTopTitle:"Form_leftTopTitle__sELLv",leftTopDescription:"Form_leftTopDescription__XM96y",leftBottom:"Form_leftBottom__vyynp",right:"Form_right__pG4hM",error:"Form_error__zC76_",submit:"Form_submit__VO0Ei",recaptcha:"Form_recaptcha__rNUUs"}},8849:function(e){e.exports={ubuntu:"styles_ubuntu__zxcVn",Manrope:"styles_Manrope__RBERx",ukr:"styles_ukr__HfCc2",flex:"styles_flex__R8ioi","justify-start":"styles_justify-start__EePuK","justify-center":"styles_justify-center__0aNi6","justify-end":"styles_justify-end__wSDHX","align-center":"styles_align-center__3XCrA","align-start":"styles_align-start__4VTIP","align-end":"styles_align-end__7bs_l","direction-column":"styles_direction-column__Ce996","justify-between":"styles_justify-between__Gsf5b",dark:"styles_dark__ZE2W3",white:"styles_white__tOgwO","border-none":"styles_border-none__Mc4zG","width-f":"styles_width-f__Hvg4O","mr-0":"styles_mr-0__7WEAU",TabsQa:"styles_TabsQa__yp9_u",container:"styles_container__Ftpxo",tabsSection:"styles_tabsSection__lP25k",faqItem:"styles_faqItem__LsHd5",open:"styles_open__YGQu1",faqQuestion:"styles_faqQuestion__p6Lh3",faqAnswer:"styles_faqAnswer__zlxbG"}},7210:function(e){e.exports={ubuntu:"Contacts_ubuntu__You9F",Manrope:"Contacts_Manrope__ad7YX",ukr:"Contacts_ukr__Pa_Cu",flex:"Contacts_flex__jqv64","justify-start":"Contacts_justify-start__6VIb7","justify-center":"Contacts_justify-center__SJvdf","justify-end":"Contacts_justify-end__r9Na0","align-center":"Contacts_align-center__Qi4fL","align-start":"Contacts_align-start__1TuGX","align-end":"Contacts_align-end__p4Cnv","direction-column":"Contacts_direction-column__g3Qnq","justify-between":"Contacts_justify-between__7FqFm",dark:"Contacts_dark__y0ciK",white:"Contacts_white__tBosG","border-none":"Contacts_border-none__DK5ov","width-f":"Contacts_width-f__zdH2y","mr-0":"Contacts_mr-0__uvHo0",contacts:"Contacts_contacts__brSYm",container:"Contacts_container__F9Ifo",box:"Contacts_box__54j2_",box1:"Contacts_box1___k_Dp",left:"Contacts_left__KR58j",city:"Contacts_city__YnTli",col:"Contacts_col__J7Qs9",title:"Contacts_title__GNFe7",scheduleBlock:"Contacts_scheduleBlock__uH7AP",team:"Contacts_team__lULfV",form:"Contacts_form__yXa5o",tabs:"Contacts_tabs__HSFDh"}},6454:function(e){e.exports={ubuntu:"OurCompany_ubuntu__aAPCi",Manrope:"OurCompany_Manrope__3pdE5",ukr:"OurCompany_ukr__Cz8gl",flex:"OurCompany_flex__UsqKv","justify-start":"OurCompany_justify-start___2Onx","justify-center":"OurCompany_justify-center__OsOtn","justify-end":"OurCompany_justify-end__6htPe","align-center":"OurCompany_align-center__uhEzS","align-start":"OurCompany_align-start__VEyrW","align-end":"OurCompany_align-end__JH9Og","direction-column":"OurCompany_direction-column__CaJX3","justify-between":"OurCompany_justify-between__JXI6Z",dark:"OurCompany_dark__nU_Cd",white:"OurCompany_white__D9Yl4","border-none":"OurCompany_border-none__KP5rL","width-f":"OurCompany_width-f__xtghz","mr-0":"OurCompany_mr-0__Y5Vcr",ourCompany:"OurCompany_ourCompany__bEMZL",container:"OurCompany_container__i_Zlb",dropdown:"OurCompany_dropdown__kmK3f",dropdownDesktop:"OurCompany_dropdownDesktop__yPWLT",dropdownMobile:"OurCompany_dropdownMobile__lKPuM",showDropdown:"OurCompany_showDropdown__ZYBou",title:"OurCompany_title__pXYPg",ButtonsFilter:"OurCompany_ButtonsFilter___Jd2E",btnDirection:"OurCompany_btnDirection__O0h0a",btnDirectionDesktop:"OurCompany_btnDirectionDesktop__WObu0",btnDirectionMobile:"OurCompany_btnDirectionMobile__6hcdS",arrow:"OurCompany_arrow__OjsGk",arrowActive:"OurCompany_arrowActive__tSKmO",active:"OurCompany_active__xwSFO",grid:"OurCompany_grid__GDqmL",loading:"OurCompany_loading__uvB2M",command:"OurCompany_command__BBUAD",command__title:"OurCompany_command__title__YcUcG",command__banner:"OurCompany_command__banner__kMcTj",question:"OurCompany_question__dn4Pf",question__title:"OurCompany_question__title__nEh1V",question__box:"OurCompany_question__box__MCQ3A",OurTeam:"OurCompany_OurTeam__gjhsq"}}},function(e){e.O(0,[324,962,18,888,774,179],function(){return e(e.s=5660)}),_N_E=e.O()}]);