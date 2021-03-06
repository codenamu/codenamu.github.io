---
layout: post
status: publish
published: true
title: "[코드포서울] 7월 프로젝트 공유회"
author:
  display_name: "임영제"
  login: ericklim
  email: easygoinglim@gmail.com
  url: http://iizi.tistory.com
author_login: ericklim
author_email: easygoinglim@gmail.com
author_url: http://iizi.tistory.com
wordpress_id: 15963
wordpress_url: http://codenamu.org/?p=15963
date: '2014-08-07 18:34:59 +0900'
date_gmt: '2014-08-07 09:34:59 +0900'
categories:
- "코드포서울"
tags:
- open government
- code for seoul
- "코드포서울"
comments:
- id: 86
  author: Girgi Ku
  author_email: kichinichi@daum.net
  author_url: ''
  date: '2014-08-11 13:49:00 +0900'
  date_gmt: '2014-08-11 04:49:00 +0900'
  content: "기대됩니다! 꾸준히 만나서 고민하고 구현해나간다는게 보통의 열정이 아닙니다만, 그런 과정들이 시민 스스로를 그리고 사회를 조금
    더 낫게 만들어가는 경험이라고 생각합니다. 결과물뿐 아니라 과정이 지속되고 있음에 기대합니다. 화이팅"
- id: 87
  author: "춘식"
  author_email: thechunsik@gmail.com
  author_url: http://chunsik.org/
  date: '2014-08-13 10:16:00 +0900'
  date_gmt: '2014-08-13 01:16:00 +0900'
  content: "저희도 '꾸준함'과 '지속가능함'에 초점을 맞추고 이번 시도가 비록 실패하더라도 두번, 세번째 시도를 이어갈 수 있도록 노력하고
    있습니다 :) 응원해주셔서 감사합니다!"
---
<p>[caption id="" align="aligncenter" width="500"]<img src="https://farm6.staticflickr.com/5114/14504086826_0c4abca052.jpg" alt="code for seoul" width="500" height="333" /> CC BY cckorea[/caption]</p>
<p>8월 2일 디캠프에서 열린 '7월 프로젝트 공유회'는 독일 베를린에서 열린 Code for All 회의의 내용을 간략히 공유하고,  각 팀별 프로젝트 진행 사항을 나누는 시간으로 이어졌습니다.</p>
<p><strong>A. 코드포여의도 - 의원님을 부탁해</strong></p>
<p>여의도에 계신 300명의 그분들. 출근은 제대로 하고 있는지, 법은 잘 만들고 계신지, 회의는 성실히 참여하시는지 궁금해도 어디에 누구에게 물어봐야할지 통 어렵죠. 4년마다 돌아오는 선거 때마다 집으로 오는 얇은 선거공보물만으로 내가 사는 지역의 국회의원을 뽑는 것보다는 임기 중에 수시로 의원님의 정보를 받아볼 수 있는 서비스를 준비 중이라고 합니다.</p>
<ul>
<li>메일링 이외로 웹사이트, SNS 등으로 채널 확장
<ul>
<li>각 후보 별로 생성되는 성적표 자료를 아카이빙하고 검색할 수 있는 페이지를 생성</li>
</ul>
</li>
<li>이용자들의 피드백을 수렴하고, 의원에게 전달하는 기능 추가
<ul>
<li>피드백 수렴은 1.5차 마일스톤에서 적용 예정</li>
<li>의원에게 전달하는 부분은 파급효과의 예상이 어렵고, '의원님을 부탁해'의 기본 취지보다 확장되는 부분이 있음</li>
</ul>
</li>
</ul>
<p><strong>B.  노GO!</strong>  "서울시민이 누리고 받을 수 있는 혜택, 지원 사업을 일목요연하게 보여주기"</p>
<p>공립 도서관에서 진행하는 무료 문학강좌,  보건소에서 진행하는 태교교실 등 서울시에 거주하는 시민들이 누릴 수 있는 다양한 혜택과 지원들, 알고 계셨나요? 분명 나에게 딱 필요하지만 어디에서 어떻게 찾아볼 수 있는지를 몰라서 놓치고 있는 서울살이 꿀팁들을 제대로 정리해서 보여주는 서비스를 준비 중이라고 합니다.</p>
<ul>
<li>소스 데이터의 구조화 정도 및 업데이트 주기 이슈
<ul>
<li>'노가다' 공수의 증가에 따른 비효율적인 프로젝트 운영</li>
<li>업데이트되는 데이터를 자동 반영할 수 없는 상황으로인해 부정확한 정보가 제공될 경우 사용자경험에 매우 부정적인 영향을 끼치</li>
</ul>
</li>
<li>서비스 기획 방안
<ul>
<li>지역/분야의 한정 : 정보의 정확성을 높이기 위해 지역 혹은 컨텐츠의 분야를 한정짓고, 호소력있는 시각화를 통한 소구로 파급력이 있는 서비스 도출</li>
<li>개발 이슈 일지 : 데이터의 품질, 사용자의 니즈에 걸맞는 데이터가 없음 등을 기록하여 공공데이터의 현주소를 고발하는 것에 의의를 둠 / 서울시 측의 DB Stack 확인 필요</li>
</ul>
</li>
<li>서울시가 추진하고 있는 서비스와의 충돌
<ul>
<li>서울시의 새 서비스의 DB에 접근, 전달에서의 차별성 소구하는 것은 어떨까</li>
</ul>
</li>
</ul>
<p><strong>C. 서울맑음</strong>  "수백 가지의 프로젝트를 관리해야하는 서울시장의 어깨를 가볍게"</p>
<p>천만명의 천만가지 고민을 숙제로 받아든 1명, 서울시장. 서울시에서 진행되고 있는 수백 개의 시정 프로젝트들의 상태와 민간 자문단의 의견까지 확인해야하는 시장의 어깨는 여간 무거운게 아니겠죠. 그 짐을 조금 덜어드리고 시민을 위해 더 달릴 수 있는 서비스를 준비 중이라고 합니다.</p>
<ul>
<li>척도의 갯수, 평가 대상 요소의 입체성 등의 구성</li>
<li>기존 평가 지표와의 비교가능성
<ul>
<li>아직 조율 및 기획 중에 있음. 단, 프로젝트에 이슈가 있다는 것을 간단히 알리고자하는 취지를 벗어나지 않는 선에서 진행</li>
</ul>
</li>
<li>서울시장만을 위한 서비스....공공성, 열린정부 취지와의 적절성
<ul>
<li>도시의 사회적 시스템을 총괄하는 공식적인 위치로 서울시 전체에 큰 영향을 미치며, 시 정부의 혁신에 시민이 참여하는 형태로 볼 수 있다.</li>
</ul>
</li>
</ul>
