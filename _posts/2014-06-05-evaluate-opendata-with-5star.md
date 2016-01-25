---
layout: post
status: publish
published: true
title: "[춘식이의 코드이야기] 오픈 데이터를 별점으로 평가해보자!"
author:
  display_name: "춘식"
  login: chunsik
  email: thechunsik@cckorea.org
  url: ''
author_login: chunsik
author_email: thechunsik@cckorea.org
wordpress_id: 14602
wordpress_url: http://codenamu.org/?p=14602
date: '2014-06-05 17:16:50 +0900'
date_gmt: '2014-06-05 08:16:50 +0900'
categories:
- "춘식이의 코드이야기"
tags: []
comments: []
---
<h1 style="text-align: center;"><strong>오픈 데이터</strong><img style="border: 0px none;" alt="This material is Open Data" src="http://assets.okfn.org/images/ok_buttons/od_80x15_blue.png" width="80" height="15" border="0" /></h1>
<p>&nbsp;</p>
<p style="text-align: center;">오픈 데이터는 최근 공공데이터에 대한 이슈와 함께 상당히 친근한 용어가 되었습니다. 다만 공공데이터는 정부에서 공개하는 오픈 '정부' 데이터에 한정된 뜻이며 실제 오픈 데이터는 '데이터'라고 칭할 수 있는 모든 것들을 공개하는 데에 의미가 있습니다. 정부에서 제공하는 공공데이터도 물론 오픈데이터이며 IT 기업들이 API로 제공하는 다양한 데이터들(지도, 검색 등)도 오픈 데이터이고 개인이 자유롭게 공개한 데이터도 오픈 데이터라고 볼 수 있습니다.<br />
<a title="open government data - simple venn diagram by Justin Grimes, on Flickr" href="https://www.flickr.com/photos/notbrucelee/6897137283"><img class="aligncenter" alt="open government data - simple venn diagram" src="https://farm8.staticflickr.com/7058/6897137283_103f698130_n.jpg" width="316" height="320" /></a><em>CC BY-SA 출처: <a href="https://www.flickr.com/photos/notbrucelee/5241176871" target="_blank">https://www.flickr.com/photos/notbrucelee/5241176871</a></em></p>
<p>하지만 사전적 의미의 '오픈' 데이터가 아닌 오픈 운동 차원에서의 '오픈 데이터'는 중요한 의미가 포함되는데 그 의미는 <a href="http://opendefinition.org/" target="_blank">Open Definition</a>에서 정의한 문장에서 찾아볼 수 있습니다.</p>
<blockquote>
<h3>“A piece of data or content is open if <strong>anyone</strong> is <strong>free to use, reuse, and redistribute</strong> it — subject only, at most, to the requirement to attribute and/or share-alike.”</h3>
</blockquote>
<p>'자유롭게 사용, 재사용, 재배포할 수 있는 데이터'가 중요한 부분입니다. 데이터를 공개하는 것 뿐만 아니라 사용자의 입장을 고려한 데이터의 공개가 필요한 것이죠. 예를 들어 자신이 아는 맛집 정보를 한글 파일로 쭉 나열한 것보다 엑셀로 위치 및 정보를 정리한 파일로 공개한 것이 좀 더 올바른 오픈 데이터에 가까운 것이겟죠?</p>
<p>&nbsp;</p>
<h1 style="text-align: center;"><strong>좋고 나쁜 데이터가 있을까?</strong></h1>
<p>&nbsp;</p>
<p><a href="https://en.wikipedia.org/wiki/Open_data" target="_blank">위키피디아에서 정의한 오픈 데이터</a>를 보면 아래의 문장이 있습니다.</p>
<blockquote>
<h3>"the term 'open data' itself is recent, gaining popularity with the rise of the <a title="Internet" href="https://en.wikipedia.org/wiki/Internet">Internet</a> and <a title="World Wide Web" href="https://en.wikipedia.org/wiki/World_Wide_Web">World Wide Web</a>"</h3>
</blockquote>
<p>이전에는 사람이 접근 가능한 도구(책, 음악CD, 신문 등)를 통해서만 정보를 취득할 수 있었지만 인터넷과 웹의 발달 이후 누구나 정보에 접근할 수 있는 길이 열림과 동시에 정보의 성질은 사람이 아닌 기계가 읽을 수 있는 것으로 그 기준이 바뀌었습니다. 따라서 사람이 아닌 기계가 (더 잘) 읽을 수 있는 데이터 일 수록 접근하기 쉽고 재사용하기 쉬운 데이터가 되는 것이죠. 문서를 사진으로 찍은 jpg 파일보다 텍스트 파일이 좋은 데이터이며, hwp 파일보다 exel, csv로 정리된 파일이 좋은 데이터라고 보는 것입니다.</p>
<p>&nbsp;</p>
<h1 style="text-align: center;"><strong>제 점수는요?</strong></h1>
<p>&nbsp;</p>
<p>World Wide Web을 만든 <a href="http://www.w3.org/People/Berners-Lee/" target="_blank">팀 버너스-리</a>는 이에 <a href="http://www.w3.org/DesignIssues/LinkedData.html" target="_blank">별점 평가 시스템</a>(<a href="http://5stardata.info/kr/" target="_blank">한글 번역 사이트</a>)를 고안합니다.</p>
<p style="text-align: center;"><a title="Open Data Institute Annual Summit 2013 by Open Data Institute  Knowledge for Everyone, on Flickr" href="https://www.flickr.com/photos/ukodi/10591792935"><img class="aligncenter" alt="Open Data Institute Annual Summit 2013" src="https://farm8.staticflickr.com/7445/10591792935_a3f4e76987.jpg" width="500" height="333" /></a><em>CC BY-NC-SA 출처: <a href="https://www.flickr.com/photos/ukodi/10591792935" target="_blank">https://www.flickr.com/photos/ukodi/10591792935</a></em></p>
<blockquote>
<h3>"The Semantic Web isn't just about putting data on the web. It is about making links, so that a person or machine can explore the web of data.  With linked data, when you have some of it, you can find other, related, data."</h3>
<h3>"in order to encourage people -- especially government data owners -- along the road to good linked data, I have developped this star rating system."</h3>
</blockquote>
<p>사람들에게 좀 더 오픈 데이터에 대한 중요성과 가치를 알리기 위하여 오픈 데이터 - 오픈 라이선스를 통해 배포되거나 자유롭게 공개된 데이터 - 에 대하여 별점을 1개부터 5개까지 매길 수 있는 5-별 평가 시스템을  제안하는 것이죠. 참고로 팀 버너스-리는 <a href="http://www.w3.org/DesignIssues/LinkedData.html" target="_blank">"Linked Open Data(LOD)"의 개념을 강조</a>합니다. 하이퍼텍스트들을 연결시킨 웹처럼 웹의 성장을 위하여 데이터들간의 연결이 필요한 것이죠. LOD에 대한 자세한 설명은 <a href="http://www.slideshare.net/WonSeokOh/lodlinked-open-data-part-1-lod" target="_blank">코드나무 활동가 오원석님이 작성하신 자료</a>를 참고하세요.</p>
<h1></h1>
<h1 style="text-align: center;">별점 기준</h1>
<p style="text-align: center;"><a href="http://www.w3.org/DesignIssues/LinkedData.html"><img class="aligncenter" alt="" src="http://www.w3.org/DesignIssues/diagrams/lod/597992118v2_350x350_Back.jpg" /></a>CC BY-SA 출처: <a href="http://www.w3.org/DesignIssues/LinkedData.html" rel="nofollow">http://www.w3.org/DesignIssues/LinkedData.html</a></p>
<table>
<tbody>
<tr>
<td>★</td>
<td>데이터를 웹 상에 오픈 라이센스로 (포맷에 상관없이) 공개<a title="별점 1 데이터의 비용과 효과 보기" href="http://5stardata.info/kr/#addendum1">1</a></td>
<td><a title="별점 1 서울 기온 데이터" href="http://5stardata.info/kr/std-1.pdf">예제 ...</a></td>
</tr>
<tr>
<td>★★</td>
<td>구조화된 데이터로 제공(예, 표를 스캔한 이미지 파일 대신 엑셀 파일)<a title="별점 2 데이터의 비용과 효과 보기" href="http://5stardata.info/kr/#addendum2">2</a></td>
<td><a title="별점 2 서울 기온 데이터" href="http://5stardata.info/kr/std-2.xls">예제 ...</a></td>
</tr>
<tr>
<td>★★★</td>
<td>비독점 포맷을 사용(예, 엑셀 파일 대신 CSV 파일)<a title="별점 3 데이터의 비용과 효과 보기" href="http://5stardata.info/kr/#addendum3">3</a></td>
<td><a title="별점 3 서울 기온 데이터" href="http://5stardata.info/kr/std-3.csv">예제 ...</a></td>
</tr>
<tr>
<td>★★★★</td>
<td>사람들이 가리킬 수 있도록 개체를 나타내기 위해 URI를 사용<a title="별점 4 데이터의 비용과 효과 보기" href="http://5stardata.info/kr/#addendum4">4</a></td>
<td style="text-align: center;"><a title="별점 4 서울 기온 데이터" href="http://5stardata.info/kr/std-4.html">예제 ...</a></td>
</tr>
<tr>
<td>★★★★★</td>
<td>데이터의 문맥과 배경을 제공하기 위해 다른 데이터와 링크<a title="별점 5 데이터의 비용과 효과 보기" href="http://5stardata.info/kr/#addendum5">5</a></td>
<td><a title="별점 5 서울 기온 데이터" href="http://5stardata.info/kr/std-5.html">예제 ...</a></td>
</tr>
</tbody>
</table>
<p style="text-align: center;"><a href="http://5stardata.info/kr/#by-example" target="_blank"><em>별점 평가 시스템 한글 번역본 참조</em></a></p>
<h3 style="text-align: center;"><strong>★</strong></h3>
<p>오픈 라이선스로 공개한 모든 데이터에 해당합니다. pdf, hwp, doc 등 모든 데이터 포맷이 포함되며 사용/재사용/재배포에 대한 편의에 상관없이 누구나 접근과 사용이 가능한 데이터를 가리킵니다. 제 경험에 따라 별점 1개에 해당하는 데이터를 꼽아보자면 <a href="http://data.go.kr" target="_blank">공공데이터 포탈</a>에 등록된 hwp(예: <a href="https://www.data.go.kr/#/L2NvbW0vY29tbW9uU2VhcmNoL29yZ2luRGF0YVNldCRAXjAxMm0zNiRAXm9yaWdpbmxTZXRQaz0zMDMzODYx" target="_blank">해외 독서 관련 단체ㆍ기관 및 독서장려프로그램</a>)이나 심지어는 압축파일(예: <a href="https://www.data.go.kr/#/L2NvbW0vY29tbW9uU2VhcmNoL29yZ2luRGF0YVNldCRAXjAxMm0zNiRAXm9yaWdpbmxTZXRQaz0zMDc1NjA2" target="_blank">전국공공체육시설현황</a>)이 해당될 것 같네요 ^^</p>
<p>다만, 별점 1개의 데이터는 오픈 데이터의 사전적 의미만을 충족하는 데이터입니다. 특정 포맷의 문서에 갇혀있는 데이터로 기계가 읽기 힘든 포맷이며 사용자가 데이터를 수집, 가공, 재배포하기가 어렵다는 단점이 있습니다.</p>
<h3 style="text-align: center;"><strong>★★</strong></h3>
<p>별점 1개의 데이터를 보다 구조화시킨 데이터에 해당합니다. 대표적인 포맷으로는 엑셀 파일이 이에 해당하죠. 현재 국내 공공데이터의 대부분이 별점 2개에 해당한다고 볼 수 있을 것 같습니다(예: <a href="https://www.data.go.kr/#/L2NvbW0vY29tbW9uU2VhcmNoL29yZ2luRGF0YVNldCRAXjAzMm0zNiRAXm9yaWdpbmxTZXRQaz0zMDM0ODAw" target="_blank">주요 상권 데이터베이스</a>). 여전히 문서에 갇혀있는 데이터로 독점 소프트웨어(MS 엑셀)을 사용해야만 데이터를 가공 및 추출할 수 있는 단점이 있습니다. 다만 구조화되어있기 때문에 번거롭지만 몇 번의 손을 거치면 별 3, 4, 5개로 가공하는 길은 열려있습니다.</p>
<h3 style="text-align: center;"><strong>★<strong>★</strong>★</strong></h3>
<p>엑셀 등의 독점 소프트웨어로 공급된 데이터가 비독점 소프트웨어로 가공되면 별 하나를 추가로 쉽게 얻을 수 있습니다! CSV 포맷 등이 여기에 해당합니다. (여기서 궁금한 점이 생겼는데, 구글에서 무료로 제공하는 구글 퓨전 테이블도 이에 해당할 수 있을까요?) 국내 공공데이터 분야에서는 <a href="https://www.data.go.kr/#/L2NvbW0vY29tbW9uU2VhcmNoL29yZ2luRGF0YVNldCRAXjAzMm0zNiRAXm9yaWdpbmxTZXRQaz0zMDY1NTIx" target="_blank">경상남도 보육시설 현황</a> 등을 예로 들 수 있겠네요.</p>
<h3 style="text-align: center;"><strong>★★★★</strong></h3>
<p>여기부터는 조금 특별한 데이터에 수여할 수 있는 별점입니다. 별 1개 ~ 3개에 해당하는 데이터는 말 그대로 웹 상에 공개된 데이터였다면 4개부터는 웹 '안'에 존재하는 데이터라고 표현할 수 있는 데이터입니다. 저마다 고유한 <a href="https://ko.wikipedia.org/wiki/URI" target="_blank">URI</a>를 가지며 웹에서 특정 URI 만으로 데이터를 수집 및 가공할 수 있는 데이터가 이에 해당합니다. 데이터가 갖는 고유한 URI가 잘 구조화 되어있을 수록 사용자가 사용, 재사용할 수 있는 방법이 쉬워지며 데이터간의 결합도 훨씬 쉽습니다. 데이터간의 결합은 위에 언급한 LOD를 뜻하며 LOD는 바로 별점 만점!을 뜻하죠. 흔히 Open API를 통해 공개된 데이터들을 의미합니다. <a href="https://www.data.go.kr/#/L2NvbW0vY29tbW9uU2VhcmNoL29wZW5hcGkkQF4wMzJtMzYkQF5wYmxvbnNpcFJlc3JjZVBrPXVkZGk6MjExZDAwYWYtMTI5MS00NWIzLWIzODQtY2Q0NjEwYTc2MmQ4JEBec2tpcFJvd3M9MCRAXm1heFJvd3M9MTA=" target="_blank">서울특별시 연도별 오존 경보 발령 현황</a> 등을 예로 들 수 있겠네요.</p>
<h3 style="text-align: center;"><strong>★★★★<strong>★</strong></strong></h3>
<p>팀 버너스-리가 꿈꾼 웹의 모습....* 모든 데이터가 구조화 되어있으며 URI로 접근이 가능하고 관련된 데이터 간의 연결이 완벽한 데이터입니다. 하이퍼텍스트(문서간의 연결)을 예로 들면 설명이 좀 더 쉽겠네요. 제가 지금 블로그 글을 쓰면서 관련된 링크를 하이퍼텍스트로 제공하고 있는데 이렇게 되면 제 블로그와 관련된 다른 문서들은 하이퍼텍스트로 연결되어 있으며 웹 안에서는 관련된 문서가 그물(웹)처럼 엮이게 되죠. 데이터도 마찬가지 입니다. 특정 데이터는 그와 관련된 다른 데이터들과 관계를 맺고 있으며 소비자는 관련된 더 많고 풍부한 데이터를 소비할 수 있게 되는 것이죠. 고립된 데이터보다 관련된 데이터와 연결망을 가지고 있는 데이터는 훨씬 그 가치가 높아지게 됩니다. 공공데이터를 활용함에 있어서도 한 가지 분야의 데이터만 활용하는 경우보다 다양한 분야를 여러가지 방향으로 관계를 맺고 활용했을 때 훨씬 더 유의미한 결과물을 만들 수 있는 것도 바로 그 가치를 증명하는 것입니다.</p>
<h1 style="text-align: center;"></h1>
<h1 style="text-align: center;">코드나무의 첫 걸음, 오픈 데이터</h1>
<p style="text-align: center;"><a title="Open Government Data Dissected by Justin Grimes, on Flickr" href="https://www.flickr.com/photos/notbrucelee/7162952914"><img class="aligncenter" alt="Open Government Data Dissected" src="https://farm9.staticflickr.com/8011/7162952914_04c91ca4fa.jpg" width="500" height="191" /></a>CC BY-SA 출처: <a href="https://www.flickr.com/photos/notbrucelee/7162952914/" target="_blank">https://www.flickr.com/photos/notbrucelee/7162952914/</a></p>
<p><a href="http://www.w3.org/DesignIssues/LinkedData.html" target="_blank">팀 버너스-리도 이 시스템을 고안한 것은 특히 정부 사람들을 위하여라고밝혔듯이</a> 5-Start 평가 시스템을 가장 고려해야 하는 곳 중 하나는 바로 정부에서 공개하는 공공데이터 분야입니다. 단순히 웹에 게시하는 공공데이터는 길거리에서 흔히 볼 수 있는 벽보와 큰 차이가 없습니다. 공공데이터는 시민들의 정보에 대한 접근성을 훨씬 높여주는 것이 우선이며 특히 정부 3.0에서 내거는 '공공데이터를 통한 부가가치상승' 또한 시민들이 데이터를 수집 및 가공하여 새로운 가치를 창출해낼 때 가능한 것입니다. 그러기 위해서는 데이터를 공개하는 정부의 편의성이 아니라 공개한 데이터를 활용하는 시민들의 편의성이 우선적으로 고려되어야 하는 것이죠. 코드나무 활동가분들이 항상 전하는 말씀을 대신하며 다섯번째 이야기도 무사히(?) 끝내겠습니다!</p>
<blockquote><p>공공데이터를 공개할 때 어떤 결과물이 만들어질지 예단하고 상상하며 그 한계점을 먼저 그리고 그에 맞게 공개하려 하지 않았으면 좋겠습니다. 또 어떻게 하면 이쁘게 데이터들을 가공하여 공개하면 좋을지 고민하지 말았으면 좋겠습니다. 수많은 분야의 공공데이터들이 공개될 때에는 시민들이 어떻게 그 데이터들을 활용할 지는 단지 한, 두사람 내지 한, 두 그룹이 모여 상상할 수 없는 그림이기 때문입니다. 개발자를 포함한 시민들이 어떻게 하면 좀 더 편리하게 공공데이터를 얻을 수 있고 재활용할 수 있는지 고민하고 그에 따라서 데이터들을 있는 그대로, 가공되지 않은 순수한 데이터들을 알맞는 형태(별점 만점!)로 공개하는 것이 가장 바람직한 모습일 것입니다.</p></blockquote>
