---
layout: post
status: publish
published: true
title: "[춘식이의 코드이야기] WHERE DOES MY MONEY GO?"
author:
  display_name: thechunsik
  login: thechunsik
  email: thechunsik@gmail.com
  url: http://chunsik.org
author_login: thechunsik
author_email: thechunsik@gmail.com
author_url: http://chunsik.org
wordpress_id: 15816
wordpress_url: http://codenamu.org/?p=15816
date: '2014-07-03 10:51:45 +0900'
date_gmt: '2014-07-03 01:51:45 +0900'
categories:
- "블로그"
- "춘식이의 코드이야기"
tags: []
comments: []
---

<p>코드나무 활동을 하면서, 그리고 코드포서울 프로젝트를 진행하면서 해외의 많은 사례들을 자연스럽게 공부하게 됩니다. 보고서 자료나 웹/앱 어플리케이션 등 지금 우리가 고민하고 있는 문제들에 대해 고민하고 해결하고자 노력했던 사례들을 찾아볼 수 있죠. 이런 자료들은 당연하다시피 CC라이선스로 배포되고 있거나 오픈소스로 공개되어 있습니다. 이번 코드이야기를 통해 들려드릴 오픈소스 개발기도 바로 이렇게 알게된 프로젝트 중 하나입니다.</p>
<p>&nbsp;</p>
<h1 style="text-align: center;"><a href="https://openspending.org" target="_blank">Openspending.org</a></h1>
<p>&nbsp;</p>
<p>열린 정부에서 가장 첫번째로 언급되는 주제이자 제가 개인적으로도 가장 관심을 갖는 것이 정부 투명성입니다. 정부가 보다 더 일을 잘하고 시민들이 더욱 편한 삶을 누리기 위해서는 시민들을 대표해서 일하는 정부 주체가 오로지 시민들을 위하여 일을 하고 있어야 합니다. 그것을 판단하는 1차적 기준은 바로 '세금'을 어떤 곳에 쓰이는 지를 확인하는 것일 수 있죠. <a href="https://openspending.org" target="_blank">OpenSpending</a>은 '세출' 데이터만을 위하여 구축된 프로젝트입니다. 각 국의 자발적인 국민들이 자신의 나라에서 공개된 세출 데이터(CSV 형태)를 업로드하면 웹상에서 단순한 조회 기능을 제공하기도 하고 제공되는 도구를 가지고 간단한 시각화 작업도 할 수 있으며 가장 중요한 것은 자동으로 데이터를 <a href="http://community.openspending.org/help/api/" target="_blank">Open API로 변환</a>하여 제공합니다. 자동으로!<br />
<img class="aligncenter" src="https://pbs.twimg.com/profile_images/1594252521/OpenSpendingTwitterAvatar_copy.jpg" alt="" width="500px" /></p>
<p>제가 처음 프로젝트를 알았을 때는 Open Knowledge Korea 활동가분께서 작업하신 <a href="https://openspending.org/2012_tax" target="_blank"> 2012년 국내 세출 데이터</a>가 유일했습니다. 뭐 대부분의 국가가 한자릿 수의 데이터를 가지고 있긴 하지만 387개의 데이터가 올라와 있는 일본을 보니 경쟁심도 생기더군요! 곧바로 눈에 불을 키고 2013년, 2014년 국내 데이터를 업데이트하기 위하여 국내 지자체 사이트를 돌아다니기 시작했습니다.</p>
<p>&nbsp;</p>
<h1 style="text-align: center;">제 점수는요, 별 1개입니다!</h1>
<p>&nbsp;</p>
<p>국내 세출 데이터는 지자체 별로 예산을 공개해야 하기 때문에 찾기 어렵지는 않았습니다. 단지 아쉬운 것은 <a href="https://www.data.go.kr/" target="_blank">공공데이터 포털</a>의 존재가 무색할만큼 공공데이터로 공개된 세출 데이터는 <a href="http://data.seoul.go.kr/openinf/catalog/catalogview.jsp" target="_blank">서울특별시가 유일</a>했던 점이죠 . 나머지 지자체는 각 도청/시청 홈페이지를 들어가서 예산 공개 페이지를 통해 다운을 받아야 했습니다.그러나! 제가 <a href="http://codenamu.org/2014/06/05/14602/" target="_blank">지난 코드이야기</a>에서 소개해드린 오픈 데이터를 별점으로 평가하는<a href="http://www.w3.org/DesignIssues/LinkedData.html" target="_blank"> 별점 평가 시스템</a> 기억하시나요!? 찾아낸 데이터들에 제가 줄 수 있는 점수는 냉혹하지만 1개가 전부입니다. 공공데이터 포탈을 통해 공개하고 있는 서울특별시를 포함하여 모든 지자체별 세출 데이터는 pdf 혹은 hwp<del>(제길)</del> 형태로 제공되고 있습니다. 데이터를 '데이터'로 보고 있지 않은 정부 3.0의 현실이기도 하죠.</p>
<p style="text-align: center;"><a title="5 star" href="http://5stardata.info/"><img class="aligncenter" src="http://5stardata.info/5star-steps.png" alt="5-stardata" width="500" /></a><em>CC0 출처: http://5stardata.info/</em></p>
<p>이제 직접 제 이름으로 데이터를 올려야겠죠? 기존에 있었던 2012년 세출데이터를 가지고 오타를 수정하고 기능별로 분류된 항목를 정리하고 난 뒤 <a href="https://openspending.org/tax_korea_updated" target="_blank">2013년, 2014년 서울특별시 데이터를 추가해서 올렸습니다</a>. 데이터 원본은 코드나무같은 Civic Hacker 들을 위하여 오픈 데이터를 자유롭게 공개할 수 있는 플랫폼 <a href="http://www.civicdata.com" target="_blank">CivicData</a> 서비스를 이용했습니다(<a href="http://www.civicdata.com/organization/codenamu" target="_blank">코드나무 폴더는 여기에</a>) OpenSpending에서 UTF-8 인코딩 파일만 인식하는 등의 이유로 CSV 편집은 Open Office를 이용하는 것이 용이하더군요(<del>엑셀로 삽질한 시간이 몇 분이던지..</del>).<br />
<a title="Flickr에서 Starlit Beaches님의 #9/365 Stress at work" href="https://www.flickr.com/photos/selfecce/4011704777/"><img class="aligncenter" src="https://farm3.staticflickr.com/2628/4011704777_bbb90e6fd3_n.jpg" alt="#9/365 Stress at work" width="520" /></a></p>
<p style="text-align: center;"><em>또 hwp 라구요.... </em></p>
<p style="text-align: center;"><em>CC BY-NC-ND 출처: https://www.flickr.com/photos/selfecce/4011704777</em></p>
<p>&nbsp;</p>
<h1 style="text-align: center;"><a href="http://wheredoesmymoneygo.org/" target="_blank">Where Does My Money Go?</a></h1>
<p>&nbsp;</p>
<p>이렇게 올린 데이터를 어떻게 사용할 수 있을까요? 영국에서 만들어진 대표적인 사례로 OpenSpending을 활용한 <a href="http://wheredoesmymoneygo.org/" target="_blank"> 내가 낸 세금은 어디에 쓰일까?</a>(Where Does My Money Go?) 프로젝트가 있습니다. 각 기능별로 세금이 어느 곳에 사용되었는지 기록된 데이터를 기반으로 두 가지 방법으로 시각화를 보여줍니다. 하나는 연소득에 따라 <a href="https://github.com/openspending/taxman" target="_blank">대략적인 소득세를 계산</a>하고 이 소득세를 기준으로 Openspending에서 제공하는 API를 통해 하루에 내가 낸 세금이 어느 분야에 얼만큼 쓰이는지 보여주는 것. 두번째는 전국 지자체별로 기능별 세출액을 지도와 함께 비교해서 보여주는 것입니다. 오픈소스로 공개되어 있는 프로젝트니 당연히 시도해보지 않을 수 없겠죠!?</p>
<p style="text-align: center;"><a title="Flickr에서 jwyg님의 WhereDoesMyMoneyGo.org" href="https://www.flickr.com/photos/jwyg/8166530255/"><img class="aligncenter" src="https://farm8.staticflickr.com/7256/8166530255_df381b4e8f.jpg" alt="WhereDoesMyMoneyGo.org" width="500" height="289" /></a><br />
<em>CC BY-SA 출처: https://www.flickr.com/photos/jwyg/8166530255/</em></p>
<h2 style="text-align: center;"></h2>
<h2 style="text-align: center;">소득세 계산하기</h2>
<p>&nbsp;</p>
<p>우선 첫번째 시각화 작업을 우리나라 실정에 맞게 적용하기 위해서는 우리나라 소득세를 계산할 필요가 있었습니다. 현재 세금을 계산하는 <a href="https://github.com/openspending/taxman" target="_blank">'Taxman' 깃헙 저장소</a>에는 <a href="https://github.com/openspending/taxman" target="_blank">영국과 일본을 포함하여 6개국 알고리즘</a>이 포함되어 있는데 저는 먼저 이곳에 <a href="http://www.nts.go.kr/tax/tax_01.asp?cinfo_key=MINF5520100726112800&amp;menu_a=100&amp;menu_b=100&amp;menu_c=400&amp;flag=01" target="_blank">우리나라 소득세(가장 기본적인 과세율만 적용)</a>를 계산하는 알고리즘을 추가하여 <a href="https://github.com/openspending/taxman/pull/7/files" target="_blank">Pull Request</a>를 보냈습니다(왜 내가 보낸 Pull을 받아달라는 트윗, 이메일도 다 씹는거니!!).</p>
<pre>exports.income_tax =

# Source: http://www.nts.go.kr/tax/tax_01.asp?cinfo_key=MINF5520100726112800&amp;menu_a=100&amp;menu_b=100&amp;menu_c=400&amp;flag=01
2013:
    bands: [
        { width: 12000000.0, rate: 0.06 }
        { width: 46000000.0, rate: 0.15 }
        { width: 88000000.0, rate: 0.24 }
        { width: 300000000.0, rate: 0.35 }
        { rate: 0.38 }
    ]
</pre>
<p style="text-align: left;">그 다음 할 일은 세금이 사용되는 항목들이 국가마다 상이하기 때문에 우리나라 항목에 맞는 아이콘을 적용할 필요가 있겠죠? 현재 아이콘을 별도로 제작하는 작업은 <a href="https://www.facebook.com/alice0445" target="_blank">@이응셋</a>님께서 진행중이구요 저는 항목마다 ID와 아이콘을 매칭시키는 작업을 진행해야 했습니다. 오픈소스로 공개된 라이브러리에서는 데이터의 ID값과 항목별 아이콘을 매칭시켜주는 알고리즘이 따로 존재하기 때문에 각 항목별 ID 값은 세출 데이터에 공개된 번호를 사용하였습니다.<a href="http://codenamu.org/wp-content/uploads/2014/07/dailybread.png"><img class="aligncenter wp-image-15830" src="http://codenamu.org/wp-content/uploads/2014/07/dailybread.png" alt="dailybread" width="500" height="232" /></a></p>
<p style="text-align: center;"><em>기능별 아이콘이 군데군데 적용된 모습</em></p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<pre>OpenSpending.Styles.Cofog = {
	// 일반공공행정
	'010': { icon: '/img/functions/government-uk.svg' },
	
	// 공공질서 및 안전
	'020': { icon: '/img/functions/order-safety.svg' },
	
	// 교육
	'050': { icon: '/img/functions/education.svg' },
	
	// 문화 및 관광
	'060': { icon: '/img/functions/culture.svg'},
	
	// 환경보호
	'070': { icon: '/img/functions/environment.svg' },

...
</pre>
<p>&nbsp;</p>
<h2 style="text-align: center;">SVG? SVG!</h2>
<p>&nbsp;</p>
<p>이제 각 지자체별 기능별 사용액을 비교해주는 시각화 작업이 남았네요. OpenSpending 데이터를 라이브러리에서 트리형태로 그대로 보여주기 때문에 크게 손볼 것은 없었지만 가장 큰 난관은 대한민국 지도를 SVG 형태로 시각화하여 인터렉티브한 기능을 구현하는 부분이였습니다. SVG를 다뤄본 경험이 전무했기 때문에(좌절의 연속...) 지도 부분을 제하고 보여줄까 고민도 하고 있던 찰나(실제 <a href="http://spending.jp" target="_blank">일본 프로젝트</a>에서는 각 지자체 별로 구현하고 있어서 지자체별 비교하는 지도는 빠져있는 상태를 확인하실 수 있습니다.) <a href="https://docs.google.com/presentation/d/1zxQ3VC9rVogNqY5yNnkUo4YK05_wCT3XZnF_z0V93vw/present#slide=id.p" target="_blank">강철님이 진행하셨던 공공데이터 워크숍</a>을 통해 SVG에 대한 이해도 급상승! 현재는 강철님이 제공해주신 대한민국 SVG 파일을 파일 사이즈를 줄이고 사이트에 맞게 적용해보고 있는 단계입니다.</p>
<p><a href="http://codenamu.org/wp-content/uploads/2014/07/bubbletree-e1404283346414.png"><img class="aligncenter wp-image-15826" src="http://codenamu.org/wp-content/uploads/2014/07/bubbletree-e1404283346414.png" alt="bubble_tree" width="500" height="284" /></a></p>
<p style="text-align: center;"><em>강원도/경기도/서울 등의 SVG 파일을 적용한 모습</em></p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<h2 style="text-align: center;">완성된 결과물까지</h2>
<p>&nbsp;</p>
<p>이미 공개된 오픈소스에 대한민국 세출 데이터에 맞는 결과물을 집어넣는 과정이기 때문에 오픈소스 개발기였지만 크게 소스코드를 만들어 내는 작업은 많지 않았습니다. 완성된 결과물을 내놓기 위하여 남은 작업은 서울특별시를 제외한 나머지 지자체들의 세출데이터를 업로드하는 것, 대한민국 종합소득세 계산 알고리즘을 단순 세율 뿐만 아니라 필요한 조건들도 포함하도록 가다듬는 것, 작업이 진행중인 아이콘을 적용하는 것, 마지막으로 대한민국 SVG 파일을 가다듬어 인터렉티브하게 지자체별 세출 항목을 비교할 수 있는 시각화를 마무리하는 것 등이 남아있네요.</p>
<p style="text-align: center;"><a title="Flickr에서 TEDxShelburneFalls님의 Molly McLeod" href="https://www.flickr.com/photos/tedxshelburnefalls/10855440265/"><img class="aligncenter" src="https://farm3.staticflickr.com/2879/10855440265_193c5296da.jpg" alt="Molly McLeod" width="500" height="333" /></a><em>CC BY-NC-ND 출처: https://www.flickr.com/photos/tedxshelburnefalls/10855440265</em></p>
<p>&nbsp;</p>
<h1 style="text-align: center;">'Civic Hacker'가 되는 길</h1>
<p>&nbsp;</p>
<p>읽어보면서 다들 느끼셨나요? 제가 진행했던 작업을 살펴보면 누구나 할 수 있는 그런 작업 과정들입니다(아마도..! 아마도...?). 물론 이미 갖추어진 오픈 플랫폼과 오픈소스 덕을 톡톡히 본 것이지만요. 단순히 Openspending에 있던 대한민국 세출 데이터가 1개에서 2개가 되는 것도, pdf/hwp 파일로만 존재했던 데이터가 눈에 보이는 시각화 작업물로 바뀌는 것도 뛰어난 기술을 가진 전문가들만의 영역이 아닌 것이죠. 이건 제가 이번 작업을 진행해오면서 깨달은 것이기도 하구요. 제가 꼭 전하고자 하는 이야기는 바로 이것입니다. 'Civic Hacker'가 되는 길이 어려운 것이 아닙니다. 관심과 참여. 이 두가지만 있으면 언제든 모든 시민이 각자의 자리에서 해커가 될 수 있다고 생각합니다. 열린 정부는 정부의 노력도 중요하지만 보다 큰 것은 많은 시민들의 관심과 참여입니다.</p>
