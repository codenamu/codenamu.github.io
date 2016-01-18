---
layout: post
status: publish
published: true
title: "[춘식이의 코드이야기] 누군가 허락해 줄 때까지 기다리고만 있지 말아라"
author:
  display_name: thechunsik
  login: thechunsik
  email: thechunsik@gmail.com
  url: http://chunsik.org
author_login: thechunsik
author_email: thechunsik@gmail.com
author_url: http://chunsik.org
wordpress_id: 16409
wordpress_url: http://codenamu.org/?p=16409
date: '2014-12-11 14:04:59 +0900'
date_gmt: '2014-12-11 05:04:59 +0900'
categories:
- "blog"
- "codestory"
tags: []
comments: []
---

<p style="text-align:right;"><i>이 글은 <a href="http://codeforphilly.com" target="_blank">Code for Philly</a>의 <a href="https://medium.com/@laurenancona" target="_blank">Lauren Ancona</a>가 쓴 <a href="https://medium.com/@laurenancona/stop-waiting-for-permission-23ce71aee8f8" target="_blank">Stop Waiting for Permission</a>을 번역한 글입니다. 저자의 허락을 얻어 번역하여 공개합니다.</i></p>
<p>&nbsp;&nbsp;&nbsp;</p>
<blockquote><p><em>“세상은 더이상 무기나, 에너지, 돈으로  움직이지 않습니다. 1과 0, 데이터로 움직이고 있습니다. 모든 것이 전기로 말이죠.”</em><br />
—Sneakers<em> (</em>1992<em>)</em></p></blockquote>
<p>필라델피아는 코드포아메리카와 펠로우쉽을 체결한 첫번째 도시 중 하나였습니다. 펠로우쉽은 1년동안 지방 정부와 함께 기술과 오픈 데이터를 향상 시킬 수 있도록 일하는 프로그램을 말합니다.</p>
<p>2011년, 펠로우쉽 프로그램에 참여했던 분들 중 Peter Fectuea가 제가 처음으로 참석했던 '이그나이트 필리' 행사에서 시빅 해킹에 대해 이야기하는 것을 본 기억이 납니다. 그 때 저는 생각했습니다. <em>'나도 하고싶다, 돕고싶다.'</em></p>
<p>하지만 큰 문제가 있었습니다. 저는 코드에 대해서 전혀 몰랐던 것이죠. 마케터로서 이메일 템플릿을 만들 수 있을 정도의 HTML/CSS는 조금 알았지만 저는 프로그래머도, 개발자도, 물론 해커도 아니였습니다.</p>
<p><a href="http://codenamu.org/wp-content/uploads/2014/12/schoolbudget.png"><img src="http://codenamu.org/wp-content/uploads/2014/12/schoolbudget.png" alt="" width="100%" /></a><br />
<a href="http://schoolbudget.phl.io/" target="_blank">SDP Budget Visualization</a>, May 2014</p>
<p>3년 뒤, 필라델피아 교육 시스템의 재정난을 걱정하고 있던 찰나, EdTech 해커톤을 발견했습니다. 그 행사를 주최했던 곳이 바로 코드포아메리카의 지역 커뮤니티 '브리게이드'에 속한 <a href="http://codeforphilly.com/" target="_blank">코드포필리</a>였죠. 저는 코드포필리의 캡틴 중 1명인 팀원과 함께 d3 차트를 활용한 디자이너로 참여했습니다. 그의 응원에 힘입어 제 녹슨 CSS 실력으로 열심히 만들어 필라델피아 학구에서 새로 올해 공개한 예산 데이터의 <a href="http://schoolbudget.phl.io/" target="_blank">시각화 작업</a>을 만들었습니다. 저는 시빅 해킹에 완전히 빠져들었고 바로 그 다음 주 코드포필리에 모임에 참석하기 시작했습니다. 이것을 시작으로 저는 필라델피아에서 공개하는 오픈 데이터를 조사하는 일을 하기 시작했습니다.</p>
<h1>지도를 가지고 시작하다</h1>
<p>아파트를 찾아다니면서 최소 1년에 한번 이상은 이런 생각을 합니다. <em>대체 이 골목의 주차 구역은 어떻게 되는거지?</em> 이런 경우 대게 저는 거주시설에서 제공하는 주차 공간 지도를 찾으려 해보았습다. 구글 트렌드에 검색해보니 이것은 저만 느끼는 어려움이 아니더군요. 모두가 느끼고 있었죠. 하지만 지도는 커녕 jpeg 형태로 된 이미지조차 찾을 수 없었습니다. 정말로요.</p>
<blockquote><p>여러분이 직접 해보세요. 지금 바로!</p></blockquote>
<p>저는 한번도 지도를 만들어본 경험이 없었습니다. 수많은 검색을 시도해본 결과, 구역 경계선을 규정해놓은 <a href="http://phillycode.org/12-2703/" target="_blank">도시 코드</a>를 찾을 수 있었습니다. 그리고 지금 이 모든 것을 바꿔놓게 된 <a href="http://phillycode.org/12-2703/">맵박스</a>(Mapbox)를 찾았죠. 기본 지도 위에 마치 크레파스를 칠하는 것처럼 도시 구역을 따라 선을 그릴 수 있었습니다. 끔찍하게도 읽기 힘든 텍스트의 연속이 아닌 지도 위에 말이에요. 이 지도는 모바일은 물론 레티나 화면에서도 아름다웠습니다.</p>
<p>위치 추적이나 검색 기능을 넣기 위하여 처음으로 자바스크립트 <a href="http://leaflet.js/" target="_blank">라이브러리</a>를 사용해보았습니다. 반응형 디자인을 위한 가이드 문서를 빠르게 훑어본 뒤 웹페이에 추가해넣었습니다.</p>
<p><a href="http://codenamu.org/wp-content/uploads/2014/12/permitparkingdistricts.png"><img src="http://codenamu.org/wp-content/uploads/2014/12/permitparkingdistricts.png" alt="permitparkingdistricts" width="100%" /></a><br />
<a href="http://laurenancona.com/parking" target="_blank">Philadelphia Residential Permit Parking Districts</a> | Attribution: ©<a href="https://www.mapbox.com/about/maps/" target="_blank">Mapbox</a> ©<a href="http://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a></p>
<p>6월 20일, 금요일 새벽 3시가 다되어서야 작업을 끝냈고 이 날 아침, 지도 페이지를 트위터로 알렸습니다.</p>
<blockquote class="twitter-tweet" lang="ko"><p>Could never find one, so I made a map of <a href="https://twitter.com/hashtag/Philly?src=hash">#Philly</a> residential <a href="https://twitter.com/PhilaParking">@PhilaParking</a> permit zones: <a href="http://t.co/BOhUSEF3R4">http://t.co/BOhUSEF3R4</a> /cc <a href="https://twitter.com/PhilaStreets">@PhilaStreets</a></p>
<p>— Lauren Ancona (@laurenancona) <a href="https://twitter.com/laurenancona/status/479998388264787968">2014년 6월 20일</a></p></blockquote>
<p><script src="//platform.twitter.com/widgets.js" async="" charset="utf-8"></script></p>
<p>1시간 뒤, 지역 IT기술 미디어인 Technical.ly Philly에서 전화가 왔습니다. 오후에 <a href="http://technical.ly/philly/2014/06/20/heres-map-phillys-residential-permit-parking-zones/" target="_blank">1면 뉴스</a>로 실릴 예정이라는 소식을 전해주더군요.</p>
<p>며칠 뒤에는 지도 방문자 수가 17,000에 달했습니다.</p>
<p><a href="http://codenamu.org/wp-content/uploads/2014/12/mapview.png"><img src="http://codenamu.org/wp-content/uploads/2014/12/mapview.png" alt="mapview" width="100%" /></a></p>
<p>필라델피아 주차 관리 기관에서 이 지도에 대한 회의에 참석해줄 수 있냐는 연락을 받았을 때는 결국 깜짝 놀라 커피를 책상에 쏟고 말았습니다. 그 사람들은 모든 것이 궁금했던 것입니다. 해커톤이 뭐야? 오픈 데이터가 어떻게 쓰이는데? 시빅 해킹은 누가 조종하는 거야?(이 때, 해킹이란 단어는 여전히 일반 사람들을 불안하게 만든다는 것을 배웠습니다) 저는 필라델피아의 CDO(Chief Data Officer)와 약속을 잡아 만날 수 있었고 현재는 이 분께서는 코드포필리 모임에 정기적으로 참여하고 있습니다.</p>
<p>저는 거의 매일 늦은 밤, 지도와, 데이터베이스 이론과, 자바스크립트 그리고 데이터 시각화를 공부하며 온 여름을 보냈습니다. 이후 샌프란시스코에서 열린 코드포아메리카 서밋에 초대를 받았습니다. 샌프란시스코로 떠나기 전, 필라델피아의 오픈 데이터팀에서 사람을 구하는 중이란 것을 발견했습니다. 살면서 정부에서 일해보리란 것을 상상도 해본적이 없는데 누군가 저에게 이 자리에 관심없냐는 질문을 던졌을 때 빵 터지고 말았습니다. 하지만 캘리포니아로 떠나는 비행기에서, 그 생각을 멈출 수 없었습니다.</p>
<p><a href="http://codenamu.org/wp-content/uploads/2014/12/codeforphilly_meetup.png"><img src="http://codenamu.org/wp-content/uploads/2014/12/codeforphilly_meetup.png" alt="" width="100%" /></a></p>
<figcaption style="text-align: center;">A Code for Philly meetup in the City of Philadelphia’s Innovation Lab. photo: Chris Alfano<br />
<i style="color: red;"><b>춘식</b>: 사진 속에 보이는 모습은 코드포필리의 핵나잇 모습입니다. 정말 다양한 연령대의 시민들이 참여하는 모습이 참 부럽네요.</i></figcaption>
<p>제가 자랐던 펜실베니아 주에 있는 코츠빌에서는 무언가 문제가 생겼을 경우 그것을 고치기 위해 팔을 걷어붙이거나 그냥 조용히 있어야했습니다. 해결책을 내놓거나, 그냥 조용히 있거나. 그래서 저는 팔을 걷어붙였습니다. 무슨뜻이냐구요? 다음 달 필라델피아 도시의 오픈데이터팀에 합류할 예정입니다! 현재 점점 더 많은 부서가 매달 많은 데이터를 공개하고 있습니다. 물론 주차 관리 기관 데이터도 말이에요.</p>
<p>제가 이 운동에 동참하면서 일했던 것보다 훨씬 더 재능있고 경험이 많은 분들을 그동안 만나왔습니다. 2011년에 시작되었던 펠로우쉽 프로그램부터 말이에요. 이제 저는 <a href="https://twitter.com/atogle" target="_blank">그들 중 누군가</a>와 함께 일하게 되겠죠.</p>
<p>이제 제가 누군가를 허락해줄 수 있는 권한을 갖게되었는지도 모르겠네요.<br />
&nbsp;&nbsp;&nbsp;<br />
<img class="aligncenter" src="https://d262ilb51hltx0.cloudfront.net/fit/c/80/80/0*fqha4PvDcwjC6UAV.png" alt="" /></p>
<p style="text-align: center;"><a href="https://medium.com/@laurenancona" target="_blank"><b>Lauren Ancona</b></a></p>
