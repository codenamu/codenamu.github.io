---
title: '[열린 지식을 위한]과학기술 오픈데이터 활용 캠프 후기'
author: codenamu
layout: post
permalink: /2013/10/24/12139/
dsq_thread_id:
  - 2980488492
categories:
  - 해커톤
tags:
  - KISTI
  - NDSL
  - NOS
  - 과학기술 오픈데이터 활용캠프
  - 한국과학기술정보연구원
  - 해커톤
---
[<img class="aligncenter size-medium wp-image-12111" alt="행사로고" src="http://codenamu.org/wp-content/uploads/2013/09/행사로고-270x300.jpg" width="270" height="300" />][1]

10월 11일 금요일, 과학기술 오픈 데이터 활용 캠프가 열렸습니다. 이른 아침부터 하루 동안 40여명이 함께 했는데요. 과학기술 공공데이터를 어떻게 활용할지에 대한 아이디어와 실제 서비스/앱 구현을 진행했습니다. 사실 딱딱하고 재미없게 느껴져서 쉽게 지나치게되는 과학기술 정보들에는 우리가 알지 못했던 재미있고 유익한 정보들이 많았어요. 특허, 논문, 그리고 각종 전문 정보들을 어떻게 하면 효과적이고 유익하게 전달하기 위한 NDSL과 open api 서비스인 NOS를 운영하는 한국과학기술정보연구원(KISTI)와 함께했는데요. 다른 해커톤, 캠프에 비해서 시간이 짧은 편이라 걱정이 많았는데, 참가자 분들의 열정으로 좋은 결과물들이 많이 나왔습니다. 그럼 본격적으로 진행상황을 공유하겠습니다!

<img class="aligncenter size-full wp-image-12167" alt="1" src="http://codenamu.org/wp-content/uploads/2013/10/1.jpg" width="604" height="604" />

### 

### **1. 아이디어 스케치**

아이디어 기획단계에서는 KISTI에서 오랫동안 고민했던 아이디어들이 역시나 캠프때도 나왔지만, 문제를 해결할 때 더욱 쉽게 접근한다는 의견이 있었어요. 다양한 분야의 기획자, 개발자, 디자이너가 함께하다보니 어떻게 하면 일반사람들이 더욱 쉽게 과학 기술 오픈데이터에 접근할 수 있을지, 어떻게 하면 더욱 효과적이고 효율적인 검색서비스를 제공할 수 있을지에 대해서 총 5팀이 고민했는데요. 완벽한 개발을 하기보다는 오히려 시민 참여형태로 연계하여 함께 만들어가는 공공데이터 서비스를 제안한 팀들도 눈에 띄었습니다.

<img class="aligncenter size-full wp-image-12168" alt="2" src="http://codenamu.org/wp-content/uploads/2013/10/2.jpg" width="604" height="604" />

1팀

1.  NDSL 논문 검색이 좀 불편. 기사에 관련된 키워드를 드래그앤드롭으로 자동으로 ndls 검색(ff, gc 플러그인처럼)
2.  논문 작성자를 위한 참고문헌 툴

<p dir="ltr">
  2팀
</p>

1.  청년창업자들(창업 희망자)들의 경우 아이디어에 대한 전문 정보와 기술을 몰라 어려움을 겪는 경우가 있다. 이들을 위해 특허/연구 전문 정보를 제공한다. 아이디어를 게시/검색하면 관련 정보를 제공하는 방식으로 서비스한다.
2.  네이버 지식인 검색의 인기 검색어와 키워드에 관련된 정보를 NDSL에서 찾아 제공

<p dir="ltr">
  3팀(특제 도시락)  검색방법/정확도 향상 방법을 중심으로 고민
</p>

1.  삭제하고 싶은 검색 키워드를 입력해서 검색의 정확도를 높임
2.  논문 검색시 인용횟수와 이용자 추천수에 따른 검색결과 정렬 기능
3.  검색 키워드가 해당 논문에서 언급되는 횟수에 따라 검색결과 정렬
4.  논문을 쓰는 사람의 입장이 아닌, 이용자가 원하는 카테고리 구분
5.  즐겨찾기 기능
6.  마인드맵 검색 &#8211; 이용자가 직접 편집가능한 마인드맵 검색기능. 중앙과 가지에 직접 키워드를 입력하고 직접 이용하며 검색을 능동적으로

<p dir="ltr">
  4팀 SExY
</p>

1.   토씨 차이로 서로 다른 검색결과가 나오는 것을 해결. (ex. 서울대/서울대학교 서로 다른 결과)
2.  엔하위키와 같이 사람들이 해당 정보에 대한 피드백을 주고 받을 수 있는 곳을 제공
3.  컨셉 : 창조적 사고를 거쳐서 나오는 마인드맵 키워드들을 손쉽게 연관 검색어로 바꿔 주어서 과학기술 공공데이터 검색을 도와주는 비영리의 공공데이터 매쉬업 검색 서비스.

<p dir="ltr">
  5팀
</p>

1.   Revyu에 있는 논문 정보를 같이 보여주거나, 키워드에 관련된 연구기관/대학을 보여주기, MS academic search- 해당 저자의 다른 논문을 찾아 제공
2.  금주의 논문/특허 섹션의 api가 있다면 실생활에 밀접한 정보과 연계해서 제공

<h3 dir="ltr">
</h3>

<h3 dir="ltr">
  <strong>2. 개발/구현 발표</strong>
</h3>

주어진 시간이 짧았기 때문에 기획에서 개발까지 정말 빠르게 진행이 되었는데요. 특히 이번 캠프에서 고무적인 일은 다소 어려운 주제였는데도 불구하고 아이디어 스케치에서 끝나지 않고 모든 팀이 아이디어를 제안할만큼의 개발과 구현을 해냈다는 사실입니다. 또한 5팀 모두 발표 또한 멋지게 해냈습니다. 각 팀의 발표자료는 아래에서 확인하실 수 있습니다.

<p dir="ltr">
  <a href="http://codenamu.org/wp-content/uploads/2013/10/3.jpg"><img class="aligncenter size-full wp-image-12170" alt="3" src="http://codenamu.org/wp-content/uploads/2013/10/3.jpg" width="604" height="604" /></a>
</p>

<p dir="ltr">
  <p dir="ltr">
    1조
  </p>
  
  <p style="text-align: center;">
  </p>
  
  <h5 style="margin-bottom: 5px; text-align: center;">
    <strong> <a title="[과학기술 오픈 데이터 활용캠프] 1조 - 드래그 검색" href="https://www.slideshare.net/cckslide/1-27198225" target="_blank">[과학기술 오픈 데이터 활용캠프] 1조 &#8211; 드래그 검색</a> </strong> from <strong><a href="http://www.slideshare.net/cckslide" target="_blank">Creative Commons Korea</a></strong>
  </h5>
  
  <p style="text-align: left;">
    <p style="text-align: left;">
      2조
    </p>
    
    <p style="text-align: center;">
    </p>
    
    <h5 style="margin-bottom: 5px; text-align: center;">
      <strong> <a title="[과학기술 오픈 데이터 활용캠프] 2조(모과) - 소셜픽 검색" href="https://www.slideshare.net/cckslide/2-27198229" target="_blank">[과학기술 오픈 데이터 활용캠프] 2조(모과) &#8211; 소셜픽 검색</a> </strong> from <strong><a href="http://www.slideshare.net/cckslide" target="_blank">Creative Commons Korea</a></strong>
    </h5>
    
    <p style="text-align: left;">
      <p style="text-align: left;">
        3조
      </p>
      
      <p style="text-align: center;">
      </p>
      
      <h5 style="margin-bottom: 5px; text-align: center;">
        <strong> <a title="[과학기술 오픈 데이터 활용캠프] 3조(마인드공공이) - 마인드맵 검색" href="https://www.slideshare.net/cckslide/3-27198231" target="_blank">[과학기술 오픈 데이터 활용캠프] 3조(마인드공공이) &#8211; 마인드맵 검색</a> </strong> from <strong><a href="http://www.slideshare.net/cckslide" target="_blank">Creative Commons Korea</a></strong>
      </h5>
      
      <p>
        &nbsp;
      </p>
      
      <p>
        4조
      </p>
      
      <p>
        <span style="color: #0000ff;">업데이트 예정 </span>
      </p>
      
      <p>
        &nbsp;
      </p>
      
      <p style="text-align: left;">
        <strong>5조 &#8211; 우승팀!</strong>
      </p>
      
      <p style="text-align: center;">
      </p>
      
      <h5 style="margin-bottom: 5px; text-align: center;">
        <strong> <a title="[과학기술 오픈 데이터 활용캠프] 5조(NENAYU) - 논문/연구자 상세 검색" href="https://www.slideshare.net/cckslide/5-27198224" target="_blank">[과학기술 오픈 데이터 활용캠프] 5조(NENAYU) &#8211; 논문/연구자 상세 검색</a> </strong> from <strong><a href="http://www.slideshare.net/cckslide" target="_blank">Creative Commons Korea</a></strong>
      </h5>
      
      <p dir="ltr" style="text-align: right;">
        *각 팀의 현장 기록은 <a href="http://bit.ly/opencamp2013">bit.ly/opencamp2013</a> 여기에서 보실 수 있습니다.
      </p>
      
      <p dir="ltr" style="text-align: right;">
        * 각 팀의 현장 사진은 bit.ly/1ggCWYi 여기에서 보실 수 있습니다.
      </p>
      
      <p dir="ltr" style="text-align: left;">
        <a href="http://codenamu.org/wp-content/uploads/2013/10/4.jpg"><img class="aligncenter size-full wp-image-12171" alt="4" src="http://codenamu.org/wp-content/uploads/2013/10/4.jpg" width="604" height="604" /></a>
      </p>
      
      <p dir="ltr" style="text-align: left;">
        이번 과학기술 오픈데이터 활용캠프에서는 해당 저자의 다른 논문, 공동 저자, 키워드에 관련된 연구기관 등을 보여주는 검색 서비스를 제안한 5팀이 우승했는데요! 우승팀을 발표하기 직전까지 여러팀이 치열하게 순위를 겨루었습니다. 그만큼 모든 아이디어가 소중했고, 결과물 또한 조금만 보완하면 될 정도로 완성도가 높았습니다. 우승한 5팀에게 다시 한 번 축하드리며, 다른 팀 참가자분들도 모두 수고하셨습니다:)
      </p>
      
      <p>
        &nbsp;
      </p>
      
      <h3>
        <strong>참여, 협력_우리가 그리는 공공데이터 환경</strong>
      </h3>
      
      <p>
        <strong></strong>과학시간에 배웠던 머리 지끈거리는 물리 공식과 화학식, 영어와 기호들로 가득한 특허정보와 논문들은 전문가, 연구자들만 찾겠지 일반인들에게 필요하겠어.. 라는 생각과 고민들은 모두 기우였습니다. NDSL 자체로는 일종의 &#8216;전자도서관&#8217;에 머무를지 모르지만, 외부 서비스와 외부 data와 매쉬업을 한다면 새로운 서비스와 가치를 창출할 수더군요. 짧은 시간이라 끝까지 완성된 서비스, 앱을 개발하기는 어려웠죠. 하지만 많은 이들이 공공데이터 개방의 필요성을 공감하고, 다양한 아이디어를 나눠주셨어요.
      </p>
      
      <p>
        맞춤형 서비스, 효과적인 개방으로 가는 열쇠는 시민과 함께 가는 것이었어요. 정부가 공공데이터 개방으로 마중물을 부어넣고, 시민들이 직접 고민하고 개발할 수있는 환경을 조성하는 것이 중요하다고 참가자를 비롯한 많은 이들이 말해주었어요. 정부와 시민, 그리고 기업 모두가 같은 눈높이에서 소통하고 함께 만드는 열린 정부. 바로, 코드나무가 그리는 공공데이터 환경입니다.
      </p>
      
      <p>
        &nbsp;
      </p>

 [1]: http://codenamu.org/wp-content/uploads/2013/09/행사로고.jpg