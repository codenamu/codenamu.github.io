---
layout: post
status: publish
published: true
title: "[춘식이의 코드이야기] 대한민국 세금 데이터, '해킹'해봤어요"
author:
  display_name: thechunsik
  login: thechunsik
  email: thechunsik@gmail.com
  url: http://chunsik.org
author_login: thechunsik
author_email: thechunsik@gmail.com
author_url: http://chunsik.org
wordpress_id: 15981
wordpress_url: http://codenamu.org/?p=15981
date: '2014-08-18 19:36:43 +0900'
date_gmt: '2014-08-18 10:36:43 +0900'
categories:
- "블로그"
- "춘식이의 코드이야기"
tags: []
comments: []
---
<p>블로터에 <a href="http://www.bloter.net/archives/198120" target="_blank">세금 감시, 시민 힘으로 '코딩'해요</a>라는 제목으로 기사가 올라갔던, <a href="http://wheredoesmymoneygo.kr" target="_blank">Where Does My Money Go?</a> 개발 과정을 공유한 <a href="http://codenamu.org/2014/07/03/15816/" target="_blank">[춘식이의 코드이야기] WHERE IS MY MONEY?</a> 글이 기사로 나간 뒤 약 5주가 지나 드디어 프로젝트가 외부에 공개되었습니다.</p>
<p>지난 글에서는 <a href="http://openspending.org/" target="_blank">OpenSpending</a>과 <a href="http://wheredoesmymoneygo.kr" target="_blank">Where Does My Money Go?</a>는 어떤 프로젝트이고 이 프로젝트를 대한민국 버전에 맞게 적용하기 위하여 대한민국 세금 계산하는 알고리즘을 만들고 광역자치단체 별 세출 데이터 종합하여 대한민국 지도에 맞게 보여주는 등 저같은(?) 초보 개발자도 꽤 의미있는 시빅 해킹을 할 수 있다는 것을 보여주기 위하여 주로 오픈소스 개발 과정들을 소개하였습니다. 이번 글에서는 주로 데이터의 관점에서 Where Does My Money Go?를 구축하기 위하여 대한민국 세출 데이터를 모으면서 느꼈던 생각들을 나누려고 합니다. 개발자로서 갖는 데이터의 관점일 수도, 정책적인 개선 사항에 대한 의견일 수도 있지만 개발기를 소개했던 지난 글보다 훨씬 더욱 의미있는 글이 될 것이라 스스로 생각하며 시작하겠습니다.</p>
<p style="text-align: center;"><a title="X-NERD by Lorenzo Blangiardi, on Flickr" href="https://www.flickr.com/photos/blangiardi/5847829593"><img class="aligncenter" src="https://farm4.staticflickr.com/3490/5847829593_eb6a2e94c9.jpg" alt="X-NERD" width="500" height="375" /></a>자, 준비 되었나요? CC BY-ND, 출처: <a href="https://www.flickr.com/photos/blangiardi/5847829593" target="_blank">https://www.flickr.com/photos/blangiardi/5847829593</a></p>
<h1 style="text-align: center;">1. 예산 데이터, 공공데이터 맞나요?</h1>
<p>&nbsp;</p>
<p>총 16개 광역자치단체 별로 공개된 예산 자료를 다운받기 위해서는 총 16군데의 홈페이지를 찾아다녀야 했습니다. 이 말인 즉슨, 대한민국 공공데이터를 한데 모아둔 공공데이터포털(http://data.go.kr)이 예산 분야 만큼은 포털 역할을 못하고 있다는 말이죠(서울특별시 예산 자료만 유일하게 서울시 자체 공공데이터포털(http://data.seoul.go.kr)을 통하여 공공데이터포털(http://data.go.kr)에 등록되어 있습니다). 모든 자치단체가 정보 공개 정책에 따라 예산 자료를 저마다의 홈페이에 공시하고 있을 뿐 링크조차도 공공데이터포털에는 등록되어있지 않았습니다.</p>
<p><a href="http://codenamu.org/wp-content/uploads/2014/08/5star-steps.png"><img class="aligncenter wp-image-15982" src="http://codenamu.org/wp-content/uploads/2014/08/5star-steps.png" alt="5star-steps" width="500" height="309" /></a></p>
<p>또한 지난 글에서 언급한 것 처럼 모든 데이터가 PDF, HWP 포맷으로 공개되어 있어 OpenSpending 플랫폼에서 지원하는 CSV 포맷으로 변환하는데 많은 노가다(Ctrl + C, Ctrl + V, 숫자키 누르기 등)가 필요했습니다. <a href="5stardata.info/kr" target="_blank">5★오픈데이터</a> 기준에서 보면 '데이터를 웹 상에 오픈 라이센스로 (포맷에 상관없이) 공개'를 의미하는 별 1개를 줄 수도 있지만 정확히는 별 반개라고 볼 수 있겠네요. 너무 냉정한가요? 제가 별 1개도 온전히 주지 못하는 이유는 뭘까요? 별 1개의 기준은 다음과 같습니다.</p>
<blockquote>
<p style="text-align: center; font-weight: bold;">데이터를 웹 상에 오픈 라이센스로 (포맷에 상관없이) 공개</p>
<p>“오픈 라이센스(PDDL, ODC-by, CC0 등)로 공개된 데이터가 웹 상에 존재하는 것은 매우 멋진 일이다. 하지만 데이터는 문서에 갇혀 있고, 맞춤형 스크레이퍼의 작성 없이 문서에서 데이터를 얻기는 어렵다.” - <a href="5stardata.info/kr" target="_blank">http://5stardata.info/kr</a></p></blockquote>
<p>현재 서울특별시(CC BY), 대전광역시(공공누리), 인천광역시, 울산광역시(이하 공공누리 출처표시), 전라북도(공공누리 출처표시-상업적이용금지-변경금지)를 제외하고는 나머지 광역자치단체의 예산 자료는 어떠한 오픈 라이선스도 적용되어있지 않은 상태입니다. 오히려 홈페이지마다 가장 하단에는 'All Copyright Reserved'라는 문구로 저작권을 확실히 명시하고 있죠. 정확하고 올바른 오픈 라이선스를 명시하지 않은 데이터는 정부가 바라는 것처럼 많은 사람들에 의해 사용되는 데에 한계가 있을 수 밖에 없습니다. 공공데이터 법안이 2013년부터 시행됨에 따라 정부 주도하에 많은 공공데이터가 공개되고 있더라도 실제로 데이터를 가진 기관에서의 '오픈 데이터'에 대한 올바른 인식이 필요하다고 생각됩니다.</p>
<h2 style="text-align: center;">없는 것도 문제, 있는 것도 문제!</h2>
<p>대전, 인천, 울산, 전라북도에 적용된 공공누리 라이선스란 무엇일까요?</p>
<blockquote><p>공공누리란?<br />
문화체육관광부는 공공저작물의 이용을 활성화하고자 한국형 공공저작물 자유이용허락 라이선스인 공공누리(Korea Open Government License)를 개발하였습니다. 공공저작물 자유이용허락 표시의 명칭 ‘공공누리’는 일반 국민 대상 공모를 통해 선정되었으며 ‘누구나 자유롭게 이용할 수 있게 한다’는 의미를 담고 있습니다.</p>
<ul>
<li>공공누리 제 1유형: 출처표시 - 저작물의 출처를 표시해야 됩니다.</li>
<li>공공누리 제 2유형: 출처표시 + 상업적 이용금지 - 저작물의 출처를 표시해야 됩니다.</li>
<li>공공누리 제 3유형: 출처표시 + 변경금지 - 저작물의 출처를 표시해야 됩니다.</li>
<li>공공누리 제 4유형: 출처표시 + 상업적 이용금지 + 변경금지 - 저작물의 출처를 표시해야 됩니다.</li>
</ul>
</blockquote>
<p>CC라이선스에서 Share Alike(SA) 조건을 뺸 것과 똑같은 형태입니다. 다만 '공공기관'에서 적용하는 라이선스의 제약 조건이 있을 뿐이죠. CC라이선스는 이미 전 세계적으로 통용되고 있는 라이선스로 개인, 조직, 공공기관 할 것 없이 모든 창작자와 창작물에 적용되는 범용적인 오픈 라이선스입니다. 이렇게 이미 널리 쓰이고 있는 CC라이선스를 두고 굳이 '공공기관'에서만 적용할 수 있는, 국내 사용자들만이 이해하고 사용할 수 있는 라이선스를 만들고 관리하고 있는지 이해할 수 없습니다.</p>
<p>무엇보다 2013년 시행된 공공데이터 법안에 따르면 공공기관에 공개한 공공데이터는 출처만 표시하면 누구나 사용할 수 있도록 되어있습니다. 뭔가 이상하지 않나요? '공공기관'의 저작물에 적용하기 위해 만든 공공누리는 총 4가지 유형이 구분되어 있는데 법에서는 1유형을 강제하고 있다뇨. 특히 전라북도 예산 데이터같은 경우는 4유형 - 출처표시 + 상업적 이용금지 + 변경금지 -를 적용하고 있습니다. 즉, 공공누리를 만든 곳도, 공공누리를 적용하고 있는 곳도 현재 공공데이터법과 오픈데이터를 잘 이해하지 못하고 있다는 걸로 보입니다. 공공누리에는 국민들의 세금이 얼마나 쓰이고 있을까요?</p>
<h1 style="text-align: center;">2. 세출 결산서가 중요하다</h1>
<p>&nbsp;</p>
<h5><strong>회계결산 안내</strong></h5>
<p><img class="size-full wp-image-3931 aligncenter" style="margin: 10px 0px 0px 30px;" title="budget_02" src="http://finance.seoul.go.kr/files/2012/03/budget_e02.gif" alt="결산업무 처리순기" /></p>
<p style="text-align: center;">서울특별시 회계결산 안내(출처: http://finance.seoul.go.kr/archives/10185)</p>
<p>위는 서울특별시 홈페이지에 게재된 회계 결산 업무 처리 순기입니다. 서울특별시는 위와 같은 과정을 거쳐 현재 2013년 세출 결산서를 홈페이지에서 확인해볼 수 있지만 회계 결산 업무 처리 순기가 모든 광역자치단체마다 동일하지 않아 8월 14일 현재 여전히 2012년 세출 결산서과 최신인 자치단체도 있으며 8월말, 9월 중으로 재정 공시를 안내하고 있는 곳들이 대부분입니다. Where Does My Money Go? 프로젝트는 따라서 세출 예산서 즉, '올해는 이렇게 예산을 계획했다'라고 하는 정보를 가지고 보여주고 있습니다. 예산서보다 결산서가 더 의미있고 중요한 것은 누구나 알 것입니다. 맘 먹기보다 행하기가 더 어렵고 실제로 계획했던 예산보다 쓰여진 예산은 전혀 달라질 수 있는 문제니까요.</p>
<p>그렇다면 세출 결산서가 공개되면 더 확실한 정보를 가지고 보여드릴 수 있을까요?</p>
<div>
<table class=" alignleft">
<thead>
<tr>
<th>과목</th>
<th>예산액 (가)</th>
<th>예산 성립 후 증감액 (나)</th>
<th>예산현액 (다) = (가) + (나)</th>
<th>지출 원인 행위액 (라)</th>
<th>지출액 (마)</th>
</tr>
</thead>
<tbody>
<tr>
<td>일반공공행정</td>
<td>3,601,508,206,000</td>
<td>9,736,279,590</td>
<td>3,611,244,485,590</td>
<td>3,591,761,136,831</td>
<td>3,588,239,673,371</td>
</tr>
<tr>
<td>공공질서및안전</td>
<td>137,847,858,000</td>
<td>10,329,683,420</td>
<td>148,177,541,420</td>
<td>142,830,084,603</td>
<td>139,878,575,283</td>
</tr>
<tr>
<td>교육</td>
<td>2,590,476,232,000</td>
<td>1,133,555,220</td>
<td>2,591,609,787,220</td>
<td>2,505,772,314,876</td>
<td>2,505,689,826,686</td>
</tr>
<tr>
<td style="text-align: center;" colspan="6">CC BY, 출처: 서울특별시 세출결산서</td>
</tr>
</tbody>
</table>
</div>
<p>위 표는 2013년 서울특별시 세출결산서의 일부를 발췌한 것입니다. 바로 다음에 보여드릴 세출예산서와 비교해보면 세출결산서에서는 큰 항목(일반공공행정, 공공질서및안전 등)들의 결산 내용만 확인할 수 있고 예산서에서 볼 수 있는 세부 지출 내역은 확인할 수 없는 것을 알 수 있습니다. 거의 수조 이상의 단위로만 결산서가 공시가 되고 이 금액이 세부적으로는 어떻게 쓰였는지 알 길이 없는 것이죠. 세출 예산서보다 세출 결산서에서 더 세부적인 항목을 확인할 수 있어야 한다고 생각하지만, 행정적인 절차가 충분히 복잡한 것을 이해하면서도 제가 너무 많은 것을 바라는 걸까요?</p>
<h1 style="text-align: center;">3. 왜 이렇게 책정한거지?</h1>
<p>&nbsp;</p>
<table>
<thead>
<tr>
<th>분야/부문</th>
<th>2014 예산안</th>
<th>구성비</th>
<th>2013 예산안</th>
<th>구성비</th>
</tr>
</thead>
<tbody>
<tr>
<td>080 사회복지</td>
<td>7,019,487,450</td>
<td>28.75%</td>
<td>7,061,937,978</td>
<td>29.69%</td>
</tr>
<tr>
<td>- 082 취약계층지원</td>
<td>2,706,890,988</td>
<td>11.38%</td>
<td>2,641,721,184</td>
<td>10.82%</td>
</tr>
<tr>
<td>- 084 보육/가족및여성</td>
<td>1,831,554,942</td>
<td>7.50%</td>
<td>1,688,189,640</td>
<td>7.10%</td>
</tr>
<tr>
<td>- 085 노인/청소년</td>
<td>1,321,149,171</td>
<td>5.41%</td>
<td>998,627,239</td>
<td>4.20%</td>
</tr>
<tr>
<td>- 086 노동</td>
<td>96,987,684</td>
<td>0.40%</td>
<td>82,301,978</td>
<td>0.35%</td>
</tr>
<tr>
<td style="text-align: center;" colspan="5">CC BY, 출처: 서울특별시 세출예산서</td>
</tr>
</tbody>
</table>
<p>위 표는 서울특별시 2013년 세출 예산서 중 가장 많은 비중을 차지하는 사회복지 분야를 발췌한 내용입니다. 보시다 시피 각 분야/부문마다 번호가 붙어있고 서울특별시는 해당 분야/부문에 얼만큼의 예산을 책정했는지 확인할 수 있죠. 모든 광역자치단체도 동일한 형태의 표준화된 양식으로 예산을 공개하고 있습니다. 하지만 표를 자세히 보면 '080 사회복지' 카테고리에서 '082 취약계층지원' 항목이 바로 나오고 '081 기초생활보장' 항목이 빠져있는 것을 볼 수 있습니다. 이 외에도 자치단체마다 어떤 항목은 빠져있고 어떤 항목은 포함되어있는 것들이 서로 다른 것을 확인할 수 있는데 그 이유는 책정된 예산이 0원인 경우 항목 자체가 제외되어 있었습니다.</p>
<p>제가 의문점을 가진 것은 이 항목이 빠져도 돼?라는 생각이 드는 분야/부문들이 상당수 포함되어있었기 때문입니다. 예를 들어, 인천광역시와 전라남도를 포함한 몇 개의 광역자치단체의 경우 '020 공공질서및안전' 항목에서 '023 경찰' 분야에 책정된 예산이 0원입니다. 교육분야도 마찬가지입니다. 경상남도의 경우 '052 고등교육'에 책정된 예산이 0원입니다. 전라남도의 경우 '053 평생/직업교육' 분야가 0원으로 책정되어 있네요. 물론 경찰, 교육, 복지를 포함하여 과학기술 등 책정된 예산이 0원인 경우가 상당수 포함되어 있었고 정책적인 이유가 분명히 있을 것입니다. 하지만 중요한 것은 수조/수십조원에 달하는 광역자치단체의 전체 예산 중에서 왜 0원을 책정했는지, 혹은 왜 이만큼의 예산을 책정했는지 예산액만큼 중요한 것은 그 이유가 아닐까요? 예산 정보를 공시하면서 예산 마다 정책적인 사유도 함께 알 수 있으면 좋겠다는 생각이 들었습니다.</p>
<p>&nbsp;</p>
<h1 style="text-align: center;">4. 중앙 정부 데이터</h1>
<p>&nbsp;</p>
<p>마지막으로 저의 다음 버전에 대한 다짐을 이야기 해보려고 합니다. 대학생으로서 부끄럽게도 이번 프로젝트를 진행하면서 대한민국 조세 제도를 처음 살펴볼 기회가 되었습니다. 종합소득세를 계산하려고 보니 각 광역자치단체에서 사용하는 지방소득세는 종합소득세의 고작 10%밖에 되지 않았습니다. 뭔가 허탈하더라구요. 국민들이 내는 소득세를 계산해서 어떻게 사용되는지 보여주겠어! 라는 다짐으로 시작했던 프로젝트지만 고작 10%밖에 보여주질 못하고 있다니. 뿐만 아니라 제가 더 궁금한 부분들은 중앙 정부에서 지출하고 있는 분야들에 많이 포함되어 있었구요(국방비, 외교/통상/통일 비용 등). 그래서 지난 코드이야기 이후 5주만에 첫 공개가 된 것처럼 이번에도 5주가 걸릴지 더 이르게 혹은 더 늦게 공개가 될 지는 모르겠지만 다음 공개가 되는 버전에서는 꼭 소득세가 사용되는 모든 분야, 중앙정부와 지방정부 세출 자료 모두를 보여드리고 싶습니다.</p>
<p>&nbsp;</p>
<p style="text-align: center;"><a title="Which one of these is not like the other? Congressional Research Service and Transparency by opensource.com, on Flickr" href="https://www.flickr.com/photos/opensourceway/5537915034"><img class="aligncenter" src="https://farm6.staticflickr.com/5252/5537915034_c8ec2c3f47.jpg" alt="Which one of these is not like the other? Congressional Research Service and Transparency" width="500" height="281" /></a>CC BY-SA, 출처: <a href="https://www.flickr.com/photos/opensourceway/5537915034/" target="_blank">https://www.flickr.com/photos/opensourceway/5537915034/</a></p>
<p>&nbsp;</p>
<h1 style="text-align: center;">정부투명성을 위한 노력</h1>
<p>이 프로젝트가 저에게 얼만나 큰 의미를 갖냐구요?</p>
<ol>
<li>일회성이 아닌 지속성 있는 프로젝트</li>
<li>시빅해커(Civic Hacker)로서 도시를 해킹한 프로젝트</li>
<li>코드나무 활동가로서 외부인들에게 공개한 프로젝트</li>
<li>깃헙 프로젝트 관리자로서 외부인에게 Commit을 받아본 프로젝트</li>
</ol>
<p>이 모든 것들이 저에게는 첫 경험이고 항상 귀에 박히도록 듣던 뭘해도 10년을 해야한다는 말의 10년을 이끌어 줄 첫 단추가 되는 프로젝트였습니다. 앞으로 시빅 해커들이 만든 것들은 이런게 있어!라고 사례만을 소개하는 대신 난 시빅 해커로서 이런걸 만들어봤어!라고 할 수 있게 된 것이죠.</p>
<p>제가 언제나 코드이야기에 덧붙이는 이야기의 주제이자 가장 관심있는 주제는 '정부투명성'입니다. 춘식이의 시빅해커로서 첫번째 프로젝트가 '세금 데이터'를 재료로 한 것도 우연이 아니구요. 우리의 세금을 가지고 정부가 사용하는 돈(<a href="http://openspending.org" target="_blank">OpenSpending</a>), 체결하는 계약(<a href="http://opencontracting.org/" target="_blank">OpenContracting</a>), 입법 과정(<a href="http://opencongress.org" target="_blank">OpenCongress</a>) 등 모든 시민들이 정부가 하는 일을 투명하게 알 수 있다면 대한민국 사회에 뿌리내린 정치에 대한 불신은 자연스럽게 해소될 것이라 생각합니다. Where Does My Money Go?가 아주 작은 첫 움직임이더라도 시민들이 내는 세금이 정말 필요한 곳에 쓰여지도록 기여할 수 있으면 좋겠습니다. 또 이 프로젝트를 발판삼아 이후에 이어질 프로젝트들이 대한민국 정부 투명성에 조금이나마 기여할 수 있도록 더욱 노력하겠습니다.</p>
<p style="text-align: center;"><a title="Dalai Lama and Mayor Norm Rice, 1993 by Seattle Municipal Archives, on Flickr" href="https://www.flickr.com/photos/seattlemunicipalarchives/5268754945"><img class="aligncenter" src="https://farm6.staticflickr.com/5044/5268754945_3e590f5969.jpg" alt="Dalai Lama and Mayor Norm Rice, 1993" width="500" height="351" /></a>CC BY, 출처: <a href="https://www.flickr.com/photos/seattlemunicipalarchives/5268754945" target="_blank">https://www.flickr.com/photos/seattlemunicipalarchives/5268754945</a></p>
<blockquote style="text-align: center;"><p>"<strong><em>투명성의 부족은 불신과 깊은 불안감을 초래한다."</em></strong><br />
- 달라이 라마</p></blockquote>
