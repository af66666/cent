<template>
    <div class="results">
      <div class="m-header">
        <div class="m-circle js-back-one">
          <h2>高</h2>
          <div class="size-a color-a">医疗需求者<br /><br /></div>
          <div class="size-b color-a">健康危险系数</div>
        </div>
        <div class="m-user">
          <div>
            <div class="size-b color-a">被保险人</div>
            <div class="size-a font-b">周觅觅</div>
          </div>
          <div>
            <div class="size-b color-a">性别</div>
            <div class="size-a font-b">男</div>
          </div>
          <div>
            <div class="size-b color-a">年龄</div>
            <div class="size-a color-c font-b">36岁</div>
          </div>
          <div></div>
        </div>
        <div class="m-user m-line">
          <div>
            <div class="size-b color-a">投保人</div>
            <div class="size-a font-b">张等等</div>
          </div>
          <div>
            <div class="size-b color-a">性别</div>
            <div class="size-a font-b">女</div>
          </div>
          <div>
            <div class="size-b color-a">年龄</div>
            <div class="size-a font-b">30岁</div>
          </div>
          <div>
            <div class="size-b color-a">年收入</div>
            <div class="size-a color-c font-b">20万</div>
          </div>
        </div>
      </div>
      <div class="weui-tab">
        <div class="weui-navbar m-outside">
          <a class="weui-navbar__item weui-bar__item--on" href="#tab1">
            综合健康评估
          </a>
          <a class="weui-navbar__item" href="#tab2">
            综合风险预测
          </a>
          <a class="weui-navbar__item" href="#tab3">
            保险方案
          </a>
          <a class="weui-navbar__item" href="#tab4">
            报告提取
          </a>
        </div>
        <div class="weui-tab__bd inside">
          <div id="tab1" class="weui-tab__bd-item weui-tab__bd-item--active module-health">
            <div class="assess">
              <div class="assessbox"><div class="color-a size-b">体型评估</div><br /><span id="bmi_shape">--型</span></div>
              <div class="assessbox"><div class="color-a size-b">预期寿命</div><br /><span id="bmi_age">--岁</span></div>
              <div class="assessbox"><div class="color-a size-b">百岁概率</div><br /><span id="bmi_chances">--%</span></div>
            </div>
            <div class="column">
              <h3><b>BMI</b> <span id="sign_bmi" class="tip">--</span></h3>
              <div class="desc">
                BMI指数是用体重公斤数除以身高米数平方得出的数字，是目前国际上常用的衡量人体胖瘦程度以及是否健康的一个标准。
              </div>
              <div class="progressbar">
                <div class="category">您的BMI：<span id="bmi_a">--</span></div>
                <div class="progress progress-bmi">
                  <div id="personbmi" class="personal-bmi"></div>
                  <div class="sign sign-bmi-one">18.5</div>
                  <div class="sign sign-bmi-two">23</div>
                </div>
              </div>
              <div class="progressbar">
                <div class="category">同族群平均值的BMI：<span id="bmi_b">--</span></div>
                <div class="progress progress-bmi">
                  <div id="groupbmi" class="personal-bmi"></div>
                  <div class="sign sign-bmi-one">18.5</div>
                  <div class="sign sign-bmi-two">23</div>
                </div>
              </div>
              <div class="icon-box hide">
                <i class="dot i-one"></i>偏低
                <i class="dot i-two"></i>正常
                <i class="dot i-three"></i>偏高
              </div>
              <div class="advice">
                注：根据临床标准，<18.5表示过轻，18.5～23表示正常，>23表示肥胖。
              </div>
            </div>
            <div class="column">
              <h3><b>腰臀比(WHR)</b> <span id="sign_whr" class="tip">--</span></h3>
              <div class="desc">
                腰围反映脂肪总量和脂肪分布的综合指标,臀围反映髋部骨骼和肌肉的发育情况。腰臀比值越大，腰腹或内脏就有可能堆积更多的脂肪。
              </div>
              <div class="progressbar">
                <div class="category">您的WHR：<span id="bmi_c">0.98</span></div>
                <div class="progress progress-whr">
                  <div id="personwhr" class="personal-bmi"></div>
                  <div class="sign sign-whr">0.92</div>
                </div>
              </div>
              <div class="progressbar">
                <div class="category">同族群平均值的WHR：<span id="bmi_d">0.81</span></div>
                <div class="progress progress-whr">
                  <div id="groupwhr" class="personal-bmi"></div>
                  <div class="sign sign-whr">0.92</div>
                </div>
              </div>
              <div class="advice">
                注：根据临床标准，<0.92表示健康，>0.92表示肥胖。
              </div>
            </div>
            <div class="column">
              <h3><b>体脂率(BFR)%</b> <span id="sign_bfr" class="tip">--</span></h3>
              <div class="desc">
                体脂率是指人体内脂肪重量在人体总体重中所占的比例，又称体脂百分数，它反映人体内脂肪含量的多少。
                肥胖会提高罹患各种疾病的风险，例如高血压、糖尿病、高血脂等。
              </div>
              <div class="progressbar">
                <div class="category">您的BFR：<span id="bmi_e">18.9</span></div>
                <div class="progress progress-bfr">
                  <div id="personbfr" class="personal-bmi js-bfr-one"></div>
                  <div class="sign sign-bfr-one">20</div>
                  <div class="sign sign-bfr-two">28</div>
                </div>
              </div>
              <div class="progressbar">
                <div class="category">同族群平均值的BFR：<span id="bmi_f">26.0</span></div>
                <div class="progress progress-bfr">
                  <div id="personbfr" class="personal-bmi js-bfr-two"></div>
                  <div class="sign sign-bfr-one">20</div>
                  <div class="sign sign-bfr-two">28</div>
                </div>
              </div>
              <div class="advice">注：根据临床标准，<20表示过少，20～28表示健康，>28表示肥胖。</div>
            </div>
          </div>
          <div id="tab2" class="weui-tab__bd-item module-risk">
            <div class="m-tab">
              <div class="m-navbar">
                <a class="js-tab m-items m-active" href="javascript:;" sign="#box1">
                  未来寿命与健康预测
                  <i class="m-sign"></i>
                </a>
                <a class="js-tab m-items" href="javascript:;" sign="#box2">
                  疾病风险预测
                  <i class="m-sign"></i>
                </a>
                <a class="js-tab m-items" href="javascript:;" sign="#box3">
                  医疗费用预估
                  <i class="m-sign"></i>
                </a>
                <a class="js-tab m-items" href="javascript:;" sign="#box4">
                  智能甄选保险类别
                  <i class="m-sign"></i>
                </a>
              </div>
              <div class="m-sub">
                <div id="box1" class="js-sub m-subbox m-subon life">
                  <div class="life-header">
                    根据推估，您的预期寿命<i class="weui-icon-info-circle icon-life" onclick="tooltip();"></i> 为 <u class="color-h">--</u> 岁，在未来 <u class="color-h">--</u>年间（--~--岁）， 因患病而导致失能的平均概率为
                    <u class="color-g">--%</u>，<u>--</u> 至 <u>--</u> 岁的生命曲线如图所示：
                  </div>
                  <div class="chart" id="lifeChart"></div>
                  <div id="note" class="life-note">
                    疾病或重症不仅会带来高额的医疗费用，同时也会导致短期或长期的失能，影响生活和工作，甚至需要停止工作卧床疗养。在此期间，家庭债务的偿还、老人子女的支出、日常生活的消费往往会让整个家庭不堪重负。建议您未雨绸缪，为自己和家庭购买必要的保险产品，抵御风险。
                  </div>
                </div>
                <div id="box2" class="js-sub m-subbox disease">
                  <div id="diseaseType" class="status hide"></div>
                  <div id="diseaseList" class="weui-cells">
                    <!--<a class="weui-cell" href="javascript:;">
                                          <div class="weui-cell__hd"></div>
                                          <div class="weui-cell__bd">
                                              心肌梗塞
                                              <div class="odds">
                                                  <div class="odd-sub">
                                                      <div class="color-c size-d">3.44%</div>未来十年最高患病概率
                                                  </div>
                                                  <div class="odd-sub">
                                                      <div class="color-c size-d">3.44倍</div>是同类族群平均概率的
                                                  </div>
                                              </div>
                                              <div class="size-b">主要症状：<span id="desc" class="color-a">--</span></div>
                                          </div>
                                          <div class="weui-cell__ft"></div>
                                      </a>-->
                  </div>
                </div>
                <div id="box3" class="js-sub m-subbox cost">
                  <div class="cost-header">
                    <div>
                      <span class="color-d"><span id="cost_b" class="size-d">--</span> 元</span><br />
                      终生医疗费用预估
                    </div>
                    <div>
                      <img class="sign" src="../assets/images/health8.png" alt="" />
                    </div>
                  </div>
                  <div class="cost-header">
                    <div>
                      <span class="color-c"><span id="cost_a" class="size-d">--</span> 元</span><br />
                      未来十年内医疗费用预估
                    </div>
                    <div>
                      <img class="sign" src="../assets/images/health9.jpg" alt="" />
                    </div>
                  </div>
                  <div class="chart" id="costChart"></div>
                  <div class="cost-tips">未来十年主要医疗费用演化趋势</div>
                  <div class="cost-notes">
                    <span class="color-c">友情提示：</span>除了疾病治疗带来的医疗费用，病后、术后康复和疗养也是一笔不菲的开销，同时因为疾病、手术等造成工作的中断和调动、家人的看护都会大大影响家庭的收入，疾病和意外带来的经济压力实际上远远不止于此。
                  </div>
                  <div class="cost-line"></div>
                  <div class="cost-tips">下面就患病风险较大的七种疾病，展示其相关的人均医疗费用。</div>
                  <div class="cost-table" id="">
                    <div class="cost-per cost-perhead">
                      <div class="cost-peritem">患病风险较高的疾病</div>
                      <div class="cost-peritem">人均医疗费用/万元</div>
                    </div>
                    <div class="cost-per">
                      <div class="cost-peritem">血管复通手术</div>
                      <div class="cost-peritem">10</div>
                    </div>
                    <div class="cost-per">
                      <div class="cost-peritem">脑中风后遗症</div>
                      <div class="cost-peritem">10-40</div>
                    </div>
                    <div class="cost-per">
                      <div class="cost-peritem">急性心肌梗塞</div>
                      <div class="cost-peritem">10-30</div>
                    </div>
                    <div class="cost-per">
                      <div class="cost-peritem">癌症(恶性肿瘤)</div>
                      <div class="cost-peritem">12-50</div>
                    </div>
                    <div class="cost-per">
                      <div class="cost-peritem">肝脏移植手术费</div>
                      <div class="cost-peritem">30-50</div>
                    </div>
                    <div class="cost-per">
                      <div class="cost-peritem">重型再生障碍性贫血</div>
                      <div class="cost-peritem">15-40</div>
                    </div>
                    <div class="cost-per">
                      <div class="cost-peritem">心肌梗塞冠状动脉搭桥</div>
                      <div class="cost-peritem">8-10</div>
                    </div>
                  </div>
                  <div class="cost-notes">
                    <span class="color-c">友情提示：</span>合理的保险产品搭配可以很好的抵御疾病意外带来的风险，重疾险（给付型）、医疗险（报销型）、寿险、意外险等产品可以在医疗社保体系之外为您提供多重保护，让您从容面对突如其来的疾病和意外，守护您的生活和家庭。
                  </div>
                </div>
                <div id="box4" class="js-sub m-subbox increase">
                  <div class="insurance-header hide" id="empty">
                    根据米因健康大数据分析，您属于：
                    <h3 id="health_type">--人群</h3>
                    建议去医院做进一步检查，做好健康风险防范，保持良好生活习惯，预防疾病风险。<br /><br />
                    <div class="recommend"><i class="icon"></i>推荐：-- <span class="star"></span></div>
                  </div>
                  <div class="type">原发性疾病</div>
                  <div id="increaseOne">
                    <!--<div class="list">
                                          <div class="box">
                                              <div class="left-side"><div class="weui-flex__item">心肌梗塞</div></div>
                                              <div class="right-side">
                                                  <div><span class="color-a">最高风险概率：</span>27%</div>
                                                  <div><span class="color-a">不患病可增寿岁数：</span>1.89岁</div>
                                                  <div><span class="color-a">疾病影响最高年岁：</span>85岁</div>
                                              </div>
                                          </div>
                                          <div class="recommend"><i class="icon"></i>推荐保险类别：长照险</div>
                                      </div>-->
                  </div>
                  <div class="increase-line"></div>
                  <div class="type">其他并发性疾病</div>
                  <div id="increaseTwo">
                    <!--<div class="list">
                                          <div class="box">
                                              <div class="left-side"><div class="weui-flex__item">关节病变</div></div>
                                              <div class="right-side">
                                                  <div><span class="color-a">最高风险概率：</span>31%</div>
                                                  <div><span class="color-a">不患病可增寿岁数：</span>-岁</div>
                                                  <div><span class="color-a">疾病影响最高年岁：</span>70岁</div>
                                              </div>
                                          </div>
                                          <div class="recommend"><i class="icon"></i>推荐保险类别：长照险</div>
                                      </div>-->
                  </div>
                  <div id="tips" class="note">
                    未来5-20年主要常见习惯病：<br />
                    1.如果您未患上述疾病，不患病可增寿年数表示您可能增加的寿命<br />
                    2.疾病的最高风险几率越高，表示未来患该疾病的概率越高，建议参考“推荐保险类别”，针对该疾病相关保险的产品进行了解和询问。
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="tab3" class="weui-tab__bd-item module-plan">
            <div class="plan-title">智能甄选保险类别</div>
            <div class="warn">根据您的健康风险评估结果和患病概率预测结果，我们建议您对保险类别考虑的优先级如下：</div>
            <div id="boxes" class="boxes">
              <table class="increase-table" border="1" bordercolor="#ccc" cellpadding="0">
                <tbody id="insurance_table">
                  <tr class="head">
                    <td class="titles" colspan="2"><div class="suggest">建议保险类别</div>生活习惯病</td>
                    <td>寿险</td>
                    <td>医疗险</td>
                    <td>癌症险</td>
                    <td>长照险</td>
                  </tr>
                  <tr>
                    <td rowspan="6">原发性疾病</td>
                    <td>癌症(恶性肿瘤)</td>
                    <td>-</td>
                    <td><span class="star"></span><span class="star"></span></td>
                    <td><span class="star"></span><span class="star"></span><span class="star"></span></td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>认知障碍</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td><span class="star"></span><span class="star"></span><span class="star"></span></td>
                  </tr>
                  <tr>
                    <td>心肌梗塞</td>
                    <td><span class="star"></span><span class="star"></span></td>
                    <td><span class="star"></span><span class="star"></span></td>
                    <td>-</td>
                    <td><span class="star"></span><span class="star"></span><span class="star"></span></td>
                  </tr>
                  <tr>
                    <td>其他形态心脏病(如心包炎)</td>
                    <td>-</td>
                    <td><span class="star"></span><span class="star"></span></td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>脑卒中</td>
                    <td>-</td>
                    <td><span class="star"></span><span class="star"></span></td>
                    <td>-</td>
                    <td><span class="star"></span><span class="star"></span><span class="star"></span></td>
                  </tr>
                  <tr>
                    <td>慢性阻塞性肺炎(COPD)</td>
                    <td><span class="star"></span><span class="star"></span></td>
                    <td><span class="star"></span><span class="star"></span></td>
                    <td><span class="star"></span></td>
                    <td><span class="star"></span><span class="star"></span></td>
                  </tr>
                  <tr>
                    <td rowspan="4">其他并发疾病</td>
                    <td>肠胃溃疡与出血</td>
                    <td>-</td>
                    <td><span class="star"></span></td>
                    <td><span class="star"></span><span class="star"></span></td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>肾脏病变(如肾炎)</td>
                    <td><span class="star"></span><span class="star"></span></td>
                    <td><span class="star"></span><span class="star"></span><span class="star"></span></td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>关节病变</td>
                    <td><span class="star"></span></td>
                    <td>-</td>
                    <td>-</td>
                    <td><span class="star"></span><span class="star"></span></td>
                  </tr>
                  <tr>
                    <td>背脊椎疾病</td>
                    <td><span class="star"></span></td>
                    <td>-</td>
                    <td>-</td>
                    <td><span class="star"></span><span class="star"></span></td>
                  </tr>

                </tbody>
              </table>
            </div>
            <div id="insurance_advise" class="plan-advise">
              <div class="plan-title">智能保险方案</div>
              <div class="user">
                <div class="userhead">投保人信息</div>
                <div class="userflex">
                  <div>
                    投保人：<span id="" class="color-i">李依依</span>
                  </div>
                  <div>
                    子女：<span id="" class="color-i">3名</span>
                  </div>
                </div>
                <div class="userflex">
                  <div>
                    年收入：<span id="" class="color-g">20万元</span>
                  </div>
                  <div>
                    老人：<span id="" class="color-i">4位</span>
                  </div>
                </div>
              </div>
              <div class="user">
                <div class="userhead">被保险人信息</div>
                <div class="userflex">
                  <div>
                    被保人：<span id="" class="color-i">李依依</span>
                  </div>
                  <div>
                    年龄：<span id="" class="color-i">50岁</span>
                  </div>
                </div>
              </div>
              <div class="user">
                <div class="userhead">被保险人健康状况</div>
                <div class="userstate">
                  属于<span id="" class="color-i size-c font-b">--</span>人群；<br />
                  未来患病概率最高的疾病为<span id="" class="color-i size-c font-b">心肌梗塞</span>；<br />
                  十年内最高患病概率为<span id="" class="color-i size-c font-b">--%</span>，
                  是同族群平均患病概率的<span id="" class="color-i size-c font-b">--倍</span>。<br />
                  除此之外，还有<span id="" class="color-i size-c font-b">--</span>、
                  <span id="" class="color-i size-c font-b">--</span>、<span id="" class="color-i size-c font-b">--</span>等多种疾病风险。
                </div>
              </div>
              <div class="user">
                <div class="userhead">被保险人的医疗费用预测结果</div>
                <div class="userflex">
                  <div>
                    <span id="" class="color-g">--元</span>
                  </div>
                  <div>
                    <span id="" class="color-g">--元</span>
                  </div>
                </div>
                <div class="userflex">
                  <div>未来十年</div>
                  <div>终身费用</div>
                </div>
              </div>
            </div>
            <div class="m-tab">
              <div class="m-navbar">
                <a class="js-tab-insurance m-items m-active" href="javascript:;" sign="#insurance_a">
                  健康
                </a>
                <a class="js-tab-insurance m-items" href="javascript:;" sign="#insurance_b">
                  意外
                </a>
                <a class="js-tab-insurance m-items" href="javascript:;" sign="#insurance_c">
                  财务
                </a>
              </div>
              <div class="m-sub">
                <div id="insurance_a" class="js-sub-insurance m-subbox m-subon">
                  <div class="healthflex">
                    <div><img class="robot" src="../assets/images/ask1.jpg" alt="" /></div>
                    <div>Medin AI建议</div>
                  </div>
                  <div class="ask">
                    <div class="delta"></div>
                    <div class="contents">
                      综合考虑被保险人的年龄性别、家庭条件、健康状况、健康风险、年收入、医疗费用预测结果等多方面的综合因素，
                      我们建议被保险人投保重疾险（给付型）和医疗险（报销型）组合的健康保障产品，再根据自身需求和经济情况合理搭配寿险、意外险等产品。
                    </div>
                    <div class="contents size-c font-b">1. 终身重疾险（给付型），建议保额 <span id="">--</span> 万元</div>
                    <div class="contents size-c font-b">2. 医疗险（报销型），建议保额 100 万元</div>
                  </div>
                  <div class="ask">
                    <div class="contents size-c font-b">为何要买给付型重疾险产品？</div>
                    <div class="contents">给付型重疾险产品通常涵盖数十种乃至上百种轻症、中症和重疾，可多次赔付，赔付总金额可观。</div>
                  </div>
                  <div class="ask">
                    <div class="contents size-c font-b">为何要买医疗险？</div>
                    <div class="contents"> 医疗险产品可以以较低的年保费，提供较高的保障金额，与重疾险组合购买可以合理有效的叠加保额，是近年来广受欢迎的热门产品。</div>
                  </div>
                  <div class="ask">
                    <div class="contents size-c font-b">一起组合购买更好？</div>
                    <div class="contents">
                      重大疾病发生后，除了高额的医疗费用以外，还会对您的生理和心理造成影响，往往需要3-5年来进行康复和疗养。在此期间，您的工作、生活等都会受到较大影响，
                      若购买重疾险和医疗险的组合产品，在重大疾病来临时，医疗险可以为您报销疾病治疗费用，同时有的医疗险产品还提供医疗陪护、医疗费用垫付等人性化的增值服务。
                      而重疾险的赔付金可用于承担后续的疗养、康复费用，同时也承担了长期误工和日常生活开销带来的经济压力。
                    </div>
                  </div>
                </div>
                <div id="insurance_b" class="js-sub-insurance m-subbox mishap">
                  <div class="healthflex">
                    <div><img class="robot" src="../assets/images/ask1.jpg" alt="" /></div>
                    <div>Medin AI建议</div>
                  </div>
                  <div class="ask">
                    <div class="delta"></div>
                    <div class="contents">遭遇意外，随之而来的是高额的治疗费、收入的损失和家庭的负担。应对风险，您需要来一份综合意外险。此外、公共交通险和旅行意外险，能更有针对性的保障出差和旅游。</div>
                    <div class="contents size-c font-b">意外险，建议保额 100 万元</div>
                  </div>
                  <div class="ask">
                    <div class="contents size-c font-b">为何要买意外险？</div>
                    <div class="contents">意外险承包因意外导致的身故、伤残、医疗和住院等情况的人身保险。赔偿金可以支持高额治疗花销、补偿家庭经济损失、保障家人生活。</div>
                  </div>
                </div>
                <div id="insurance_c" class="js-sub-insurance m-subbox finance">
                  <div class="healthflex">
                    <div><img class="robot" src="../assets/images/ask1.jpg" alt="" /></div>
                    <div>Medin AI建议</div>
                  </div>
                  <div class="ask">
                    <div class="delta"></div>
                    <div class="contents">身故和伤残都导致您的收入中断、父母老无所依、还贷的重负全部落到伴侣身上。应对风险，您需要来一份人寿险！</div>
                    <div class="contents size-c font-b">寿险，建议保额 10 万元</div>
                  </div>
                  <div class="ask">
                    <div class="contents size-c font-b">为何要买寿险？</div>
                    <div class="contents">定期寿险承包任何原因导致的身故或全残，赔偿金能够覆盖家庭的贷款余额、养育子女、赡养父母和家庭收入损失等费用。</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="tab4" class="weui-tab__bd-item module-see">
            <img class="slogan" src="../assets/images/search5.png" alt="" />
            <div class="code">
              <img class="codesign" src="../assets/images/search6.png" alt="" />
              <div class="codehead">
                <div>您的查询码</div>
                <div id="search_code" class="phone">1****6623</div>
                <a id="search_copy" href="javascript:;" class="weui-btn copy">复制</a>
              </div>

              <div class="searchflex">
                <div>理财分析师</div>
                <div id="search_agent" class="color-j">张一一</div>
              </div>
              <div class="searchflex">
                <div>电话</div>
                <div id="search_phone" class="color-j">188****8888</div>
              </div>
              <div class="searchflex">
                <div>公司</div>
                <div id="search_company" class="color-j">广东--</div>
              </div>
              <img id="search_qr" class="qrcode" src="../assets/images/searchw.png" alt="" />
              <div class="text-c">长按识别图中二维码</div>
            </div>
            <div class="size-b text-c">上海米因医疗器械科技有限公司</div>
            <input id="search_paste" type="text" class="hide"  />
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "results"
    }
</script>

<style scoped lang="scss">
  .results:before {
    display: table;
    content: '';
  }
  .results {
    height: 100%;
    color: #333;
    font-size: 14px;
    background: #f5f5f5;
    overflow-y: auto;
    .chart {
      width: 364px;
      height: 360px;
      margin: 0 auto;
      padding: 0px;
    }
    .weui-panel__hd {
      color: #fff;
    }
    .weui-panel__hd:after {
      border: none;
    }
    .header {
      padding: 36px 12px 12px;
    }
    .footer {
      position: fixed;
      bottom: 0;
      padding: 0 12px 20px;
      width: 100%;
      box-sizing: border-box;
    }
    .footer .iconfont {
      font-size: 32px;
      color: #333;
    }
    .fl {
      float: left;
    }
    .fr {
      float: right;
    }
    .proposal {
      padding: 12px 12px 24px;
    }
    .medin-content {
      padding: 12px;
    }
    .medin-border:after {
      content: " ";
      position: absolute;
      right: 15px;
      bottom: 0;
      left: 15px;
      height: 1px;
      border-bottom: 1px solid #e5e5e5;
      color: #e5e5e5;
      -webkit-transform-origin: 0 100%;
      transform-origin: 0 100%;
      -webkit-transform: scaleY(.5);
      transform: scaleY(.5);
    }
    .show {
      display: block;
    }

    .hide {
      display: none;
    }
    .color-a {
      color: #999;
    }
    .color-b {
      color: #235cab;
    }
    .color-c {
      color: #6D92EE;
    }
    .color-d {
      color: #E0525B;
    }
    .color-e {
      color: #eee;
    }
    .color-f {
      color: #fff;
    }
    .color-g {
      color: #f5495b;
    }
    .color-h {
      color: #6293f5;
    }
    .color-i {
      color: #333;
    }
    .color-j {
      color: #4575E6;
    }
    .size-a {
      font-size: 14px;
    }
    .size-b {
      font-size: 12px;
    }
    .size-c {
      font-size: 16px;
    }
    .size-d {
      font-size: 18px;
    }
    .size-e {
      font-size: 20px;
    }
    .size-f {
      font-size: 22px;
    }
    .size-g {
      font-size: 24px;
    }
    .size-h {
      font-size: 26px;
    }
    .size-i {
      font-size: 28px;
    }
    .font-b {
      font-weight: bold;
    }
    .text-c {
      text-align: center;
    }
    .m-header {
      margin: 15px;
      padding: 15px;
      border-radius: 5px;
      background: #fff;
    }
    .js-back-one {
      background: url(../assets/images/res_1.jpg) no-repeat;
    }
    .js-back-two {
      background: url(../assets/images/res_2.jpg) no-repeat;
    }
    .js-back-three {
      background: url(../assets/images/res_3.jpg) no-repeat;
    }
    .m-circle {
      margin: 0 auto 10px;
      padding-top: 32px;
      width: 120px;
      height: 140px;
      text-align: center;
      background-size: 100%;
    }
    .m-user {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 5px 0;
    }
    .m-line:before {
      content: " ";
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      height: 1px;
      border-bottom: 1px solid #ccc;
      color: #ccc;
      -webkit-transform-origin: 0 100%;
      transform-origin: 0 100%;
      -webkit-transform: scaleY(.5);
      transform: scaleY(.5);
    }
    .m-user>div {
      width: 25%;
    }
    .weui-tab {
      background: #fff;
    }
    .weui-navbar {
      padding: 0 15px;
      background-color: #fff;
    }
    .weui-navbar__item:after {
      border: none;
    }
    .m-outside .weui-navbar__item {
      height: 50px;
      font-size: 12px;
      line-height: 2;
      transition: all .3s ease-in;
    }
    .m-outside .weui-navbar__item.weui-bar__item--on {
      color: #333;
      background: #fff;
    }
    .m-outside .weui-bar__item--on:before {
      display: block;
      content: '';
      position: absolute;
      bottom: 0px;
      left: 50%;
      margin-left: -10px;
      width: 20px;
      height: 4px;
      border-radius: 9999px;
      background: #6d92ee;
    }
    .module-health,
    .module-risk,
    .module-plan,
    .module-see {
      padding: 10px 15px;
    }

    /*module-health start*/
    .module-health .assess {
      display: -webkit-box;
      display: -webkit-flex;
      display: flex;
      align-items: center;
      margin: 0 -5px;
    }
    .module-health .assessbox {
      -webkit-box-flex: 1;
      -webkit-flex: 1;
      flex: 1;
      margin: 5px;
      padding: 10px;
      color: #6D92EE;
      border-radius: 10px;
      background: #f5f7fa;
    }
    .module-health .column {
      margin: 10px 0;
      padding: 10px;
      border-radius: 5px;
      background: #f5f7fa;
    }
    .module-health .tip {
      display: inline-block;
      padding: 0 10px 0 6px;
      height: 20px;
      line-height: 20px;
      color: #fff;
      font-size: 12px;
      font-weight: 200;
      vertical-align: text-bottom;
      border-radius: 0 99px 99px 0;
      background-color: #f8c877;
    }
    .module-health .tip-one {
      background-color: #338FFF;
    }
    .module-health .tip-two {
      background-color: #2EE68D;
    }
    .module-health .tip-three {
      background-color: #FF4D4D;
    }
    .module-health .desc {
      margin: 15px 0;
      color: #999;
      font-size: 12px;
    }
    .module-health .progressbar {
      position: relative;
      margin-bottom: 32px;
    }
    .module-health .category {
      margin-bottom: 15px;
    }
    .module-health .progress {
      position: relative;
      height: 3px;
      border-radius: 999px;
    }
    .module-health .progress-bmi {
      background: -webkit-linear-gradient(to right, #338FFF 0, #338FFF 24%, #fff 24%, #fff 25%, #2EE68D 25%, #2EE68D 75%, #fff 75%, #fff 76%, #FF4D4D 76%, #FF4D4D 100%);
      background: -moz-linear-gradient(to right, #338FFF 0, #338FFF 24%, #fff 24%, #fff 25%, #2EE68D 25%, #2EE68D 75%, #fff 75%, #fff 76%, #FF4D4D 76%, #FF4D4D 100%);
      background: linear-gradient(to right, #338FFF 0, #338FFF 24%, #fff 24%, #fff 25%, #2EE68D 25%, #2EE68D 75%, #fff 75%, #fff 76%, #FF4D4D 76%, #FF4D4D 100%);
    }
    .module-health .progress-whr {
      background: -webkit-linear-gradient(to right, #2EE68D 0, #2EE68D 49%, #fff 49%, #fff 51%, #FF4D4D 51%, #FF4D4D 100%);
      background: -moz-linear-gradient(to right, #2EE68D 0, #2EE68D 49%, #fff 49%, #fff 51%, #FF4D4D 51%, #FF4D4D 100%);
      background: linear-gradient(to right, #2EE68D 0, #2EE68D 49%, #fff 49%, #fff 51%, #FF4D4D 51%, #FF4D4D 100%);
    }
    .module-health .progress-bfr {
      background: -webkit-linear-gradient(to right, #338FFF 0, #338FFF 24%, #fff 24%, #fff 25%, #2EE68D 25%, #2EE68D 75%, #fff 75%, #fff 76%, #FF4D4D 76%, #FF4D4D 100%);
      background: -moz-linear-gradient(to right, #338FFF 0, #338FFF 24%, #fff 24%, #fff 25%, #2EE68D 25%, #2EE68D 75%, #fff 75%, #fff 76%, #FF4D4D 76%, #FF4D4D 100%);
      background: linear-gradient(to right, #338FFF 0, #338FFF 24%, #fff 24%, #fff 25%, #2EE68D 25%, #2EE68D 75%, #fff 75%, #fff 76%, #FF4D4D 76%, #FF4D4D 100%);
    }
    .module-health .personal-bmi {
      position: absolute;
      top: -4px;
      width: 10px;
      height: 10px;
      font-size: 16px;
      color: #fff;
      text-align: center;
      font-weight: 400;
      line-height: 35px;
      border: 1px solid #fff;
      border-radius: 999px;
      -webkit-box-shadow: 0px 0px 5px 0px #eee;
      box-shadow: 0px 0px 5px 0px #eee;
    }
    .module-health .js-bmi-one {
      left: 11%;
      background-color: #338FFF;
    }
    .module-health .js-bmi-two {
      left: 49%;
      background-color: #2EE68D;
    }
    .module-health .js-bmi-three {
      left: 87%;
      background-color: #FF4D4D;
    }
    .module-health .js-bmi-four {
      left: 56%;
      background-color: #fcc704;
    }
    .module-health .js-whr-one {
      left: 23%;
      background-color: #2EE68D;
    }
    .module-health .js-whr-two {
      left: 74%;
      background-color: #FF4D4D;
    }
    .module-health .js-bfr-one {
      left: 11%;
      background-color: #338FFF;
    }
    .module-health .js-bfr-two {
      left: 49%;
      background-color: #2EE68D;
    }
    .module-health .js-bfr-three {
      left: 87%;
      background-color: #FF4D4D;
    }
    .module-health .sign {
      position: absolute;
      top: 12px;
      font-size: 12px;
      color: #999;
    }
    .module-health .sign-bmi-one {
      left: 20%;
    }
    .module-health .sign-bmi-two {
      left: 73%;
    }
    .module-health .sign-whr {
      left: 46%;
    }
    .module-health .sign-bfr-one {
      left: 22%;
    }
    .module-health .sign-bfr-two {
      left: 73%;
    }
    .module-health .icon-box {
      padding-right: 20px;
      font-size: 12px;
      text-align: center;
    }
    .module-health .dot {
      display: inline-block;
      margin-left: 15px;
      margin-right: 5px;
      width: 8px;
      height: 8px;
      border-radius: 999px;
      background-color: #eee;
    }
    .module-health .i-one {
      background-color: #338FFF;
    }
    .module-health .i-two {
      background-color: #2EE68D;
    }
    .module-health .i-three {
      background-color: #FF4D4D;
    }
    .module-health .i-four {
      background-color: #fcc704;
    }
    .module-health .advice {
      color: #999;
      font-size: 10px;
    }
    /*module-health end*/

    /*module-risk start*/
    .module-risk {

    }
    .module-risk .m-tab {
      position: relative;
    }
    .module-risk .m-navbar {
      display: -webkit-box;
      display: -webkit-flex;
      display: flex;
      z-index: 500;
      width: 100%;
      box-sizing: border-box;
    }
    .module-risk .m-items {
      position: relative;
      display: block;
      margin: 4px;
      padding: 6px;
      width: 92px;
      font-size: 12px;
      text-align: center;
      color: #888;
      border: 1px solid #999;
      border-radius: 5px;
      -webkit-tap-highlight-color: rgba(0,0,0,0);
    }
    .module-risk .m-items.m-active {
      color: #fff;
      border-color: #6D92EE;
      background-color: #6D92EE;
    }
    .module-risk .m-active .m-sign {
      display: block;
      position: absolute;
      bottom: -6px;
      left: 50%;
      margin-left: -3px;
      width: 0px;
      height: 0px;
      border-left: 6px solid transparent;
      border-right: 6px solid transparent;
      border-top: 6px solid #6D92EE;
    }
    .module-risk .m-sub {
      padding: 10px 0;
      box-sizing: border-box;
    }
    .module-risk .m-subbox {
      display: none;
    }
    .module-risk .m-subbox.m-subon {
      display: block;
    }
    /*module-risk end*/

    /*module-risk life start*/
    .life {
      background: #fff;
    }
    .life:after {
      display: table;
      content: '';
    }
    .life .life-header {
      padding-bottom: 10px;
      border-bottom: 5px solid #eee;
    }
    .life .icon-life {
      padding-bottom: 2px;
      font-size: 14px;
      font-weight: bold;
      color: #ff9b25;
    }
    .life .life-note {
      padding: 10px 12px 72px;
      font-size: 12px;
    }
    /*module-risk life end*/

    /*module-risk disease start*/
    .disease:before {
      content: '';
      display: table;
    }
    .disease .status {
      margin-bottom: 5px;
      padding-bottom: 5px;
      font-size: 18px;
      border-bottom: 5px solid #eee;
    }
    .disease .weui-cells {
      margin: 0;
    }
    .disease .weui-cells:before,
    .disease .weui-cells:after {
      border: none;
    }
    .disease .warn {
      color: #ff5631;
    }
    .disease .weui-cell {
      display: block;
      padding: 20px 0;
      color: #333;
      border-bottom: 5px solid #f5f7fa;
    }
    .disease .weui-cell:before {
      right: 15px;
      border-width: 0;
    }
    .disease .weui-cell__hd {
      margin-right: 10px;
    }
    .disease .odds {
      display: -webkit-box;
      display: -webkit-flex;
      display: flex;
      -webkit-box-align: center;
      -webkit-align-items: center;
      align-items: center;
      margin: 15px 0;
      padding: 10px 6px;
      color: #999;
      font-size: 13px;
      text-align: center;
      border-radius: 5px;
      background: #f5f7fa;
    }
    .disease .odd-sub {
      -webkit-box-flex: 1;
      -webkit-flex: 1;
      flex: 1;
    }
    .disease .warn {
      color: #ff5631;
    }
    /*module-risk disease end*/

    /*module-risk cost start*/
    .cost .cost-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 10px;
      padding: 10px 20px;
      color: #999;
      font-size: 12px;
      border-radius: 5px;
      background: #F5F7FA;
    }
    .cost .sign {
      display: block;
      width: 60px;
    }
    .cost .chart {
      height: 350px;
    }
    .cost .cost-tips {
      padding: 10px 0;
      text-align: center;
    }
    .cost .cost-notes {
      font-size: 12px;
      color: #666;
    }
    .cost .cost-line {
      margin: 20px 0;
      border-bottom: 5px solid #eee;
    }
    .cost .cost-table {
      margin: 10px 0;
      color: #fff;
      border-radius: 10px;
      background: #F5F7FA;
      -webkit-box-shadow: 0px 0px 10px 5px #eee;
      box-shadow: 0px 0px 10px 5px #eee;
      overflow: hidden;
    }
    .cost .cost-per {
      position: relative;
      padding: 10px;
      text-align: center;
      color: #6D92EE;
      display: -webkit-box;
      display: -webkit-flex;
      display: flex;
      -webkit-box-align: center;
      -webkit-align-items: center;
      align-items: center;
    }
    .cost .cost-per:before {
      content: "";
      position: absolute;
      top: -1px;
      right: 10px;
      left: 10px;
      height: 1px;
      border-bottom: 1px solid #d9d9d9;
      color: #d9d9d9;
      -webkit-transform-origin: 0 0;
      transform-origin: 0 0;
      -webkit-transform: scaleY(.5);
      transform: scaleY(.5);
    }
    .cost .cost-perhead:before {
      border: none;
    }
    .cost .cost-perhead {
      color: #fff;
      background: #6D92EE;
    }
    .cost .cost-peritem {
      flex: 1;
    }
    /*module-risk cost end*/

    /*module-risk increase start*/
    .increase:before {
      display: table;
      content: ' ';
    }
    .increase .insurance-header {
      margin: 50px 15px;
      padding: 15px;
      text-align: center;
      color: #666;
      border-radius: 5px;
      background: #fff;
    }
    .increase .type {
      font-size: 17px;
    }
    .increase .list {
      margin: 10px 0;
      padding: 15px;
      border-radius: 5px;
      background: #f5f7fa;
    }
    .increase .box {
      padding: 6px 0;
      display: -webkit-box;
      display: -webkit-flex;
      display: flex;
      align-items: center;
    }
    .increase .left-side {
      display: -webkit-box;
      display: -webkit-flex;
      display: flex;
      align-items: center;
      -webkit-box-flex: 1;
      -webkit-flex: 1;
      flex: 1;
      padding: 0px 20px 0;
      width: 44%;
      height: 90px;
      font-size: 17px;
      font-weight: 400;
      text-align: center;
      line-height: 1.2;
      /*background: url(../assets/images/health1.png) center no-repeat;*/
      background-size: 50%;
      overflow: hidden;
    }
    .increase .right-side {
      -webkit-box-flex: 2;
      -webkit-flex: 2;
      flex: 2;
    }
    .increase .right-side div {
      padding: 2px 0;
    }
    .increase .color-a {
      color: #666;
    }
    .increase .recommend {
      padding: 6px 10px;
      text-align: center;
      color: #6D92EE;
      border: 1px solid #6D92EE;
      border-radius: 999px;
    }
    .increase .icon {
      display: inline-block;
      width: 26px;
      height: 26px;
      background: url(../assets/images/health5.png) 0 3px no-repeat;
      background-size: 18px 18px;
    }
    .increase .star {
      display: inline-block;
      margin-bottom: -12px;
      width: 18px;
      height: 26px;
      background: url(../assets/images/healthstar.png) 0 0 no-repeat;
      background-size: 100%;
    }
    .increase .increase-line {
      margin: 20px 0;
      border-bottom: 5px solid #eee;
    }
    /*module-risk increase end*/

    /*module-plan start*/
    .module-plan .plan-title {
      font-size: 20px;
      margin-bottom: 15px;
    }
    .module-plan .warn {
      margin-bottom: 15px;
      font-size: 12px;
    }
    .module-plan .boxes {
      margin-bottom: 15px;
      background: #f5f9ff;
    }
    .module-plan .increase-table {
      margin: 0 auto;
      width: 100%;
      text-align: center;
      vertical-align: middle;
      border-color: #ccc;
      border-collapse:collapse;
      table-layout: fixed;
    }
    .module-plan .increase-table td {
      width: 16%;
      padding: 2px 0;
      vertical-align: middle;
    }
    .module-plan .increase-table .head {
      background: #cdf;
    }
    .module-plan .increase-table .titles {
      position: relative;
      padding: 6px;
      width: 32%;
      text-align: left;
      font-size: 12px;
    }
    .module-plan .increase-table .titles:after {
      content: " ";
      position: absolute;
      top: 10px;
      right: 0;
      left: 10px;
      height: 1px;
      border-bottom: 1px solid #ccc;
      color: #ccc;
      -webkit-transform-origin: 0 100%;
      transform-origin: 0 100%;
      -webkit-transform: scaleY(.5) rotate(40deg);
      transform: scaleY(.5) rotate(40deg);
    }
    .module-plan .increase-table .suggest {
      text-align: right;
      padding-bottom: 10px;
    }
    .module-plan .star {
      display: inline-block;
      width: 18px;
      height: 36px;
      background: url(../assets/images/healthstar.png) 0 13px no-repeat;
      background-size: 100%;
    }
    .module-plan .plan-advise {

    }
    .module-plan .user {
      margin-bottom: 10px;
      padding: 20px 15px;
      border-radius: 5px;
      background: #f7f9fc;
    }
    .module-plan .userhead {
      display: inline-block;
      margin-bottom: 10px;
      height: 20px;
      line-height: 20px;
      font-size: 18px;
      background: linear-gradient(to top, #B1C5F4, #B1C5F4 5px, #f7f9fc 5px, #f7f9fc);
    }
    .module-plan .userflex {
      display: -webkit-box;
      display: -webkit-flex;
      display: flex;
      -webkit-box-align: center;
      -webkit-align-items: center;
      align-items: center;
      justify-content: space-between;
      padding: 10px 0;
      color: #666;
    }
    .module-plan .m-tab {
      position: relative;
    }
    .module-plan .m-navbar {
      display: -webkit-box;
      display: -webkit-flex;
      display: flex;
      z-index: 500;
      width: 100%;
      box-sizing: border-box;
      background: #f7f9fc;
    }
    .module-plan .m-items {
      position: relative;
      display: block;
      padding: 0 10px;
      width: 80px;
      height: 46px;
      line-height: 46px;
      color: #333;
      -webkit-tap-highlight-color: rgba(0,0,0,0);
    }
    .module-plan .m-items.m-active {
      color: #6D92EE;
      font-size: 20px;
    }
    .module-plan .m-active .m-sign {
      display: block;
      position: absolute;
      bottom: -6px;
      left: 50%;
      margin-left: -3px;
      width: 0px;
      height: 0px;
      border-left: 6px solid transparent;
      border-right: 6px solid transparent;
      border-top: 6px solid #6D92EE;
    }
    .module-plan .m-sub {
      padding: 10px 0;
      box-sizing: border-box;
    }
    .module-plan .m-subbox {
      display: none;
    }
    .module-plan .m-subbox.m-subon {
      display: block;
    }
    .module-plan .healthflex {
      display: -webkit-box;
      display: -webkit-flex;
      display: flex;
      -webkit-box-align: center;
      -webkit-align-items: center;
      align-items: center;
      justify-content: flex-start;
      margin-bottom: 12px;
      padding: 10px;
      font-size: 18px;
    }
    .module-plan .robot {
      display: block;
      margin-right: 10px;
      width: 62px;
      height: 62px;
    }
    .module-plan .ask {
      position: relative;
      margin-bottom: 10px;
      padding: 15px;
      border-radius: 5px;
      background: #f7f9fc;
    }
    .module-plan .delta {
      display: block;
      position: absolute;
      top: -12px;
      left: 30px;
      width: 0px;
      height: 0px;
      border-left: 12px solid transparent;
      border-right: 12px solid transparent;
      border-bottom: 12px solid #f7f9fc;
    }
    .module-plan .contents {
      margin-bottom: 10px;
    }
    /*module-plan end*/

    /*module-see start*/
    .module-see {
      color: #999;
      background: #fafcff;
    }
    .module-see .slogan {
      display: block;
      margin: 20px auto 30px;
      width: 235px;
    }
    .module-see .code {
      z-index: 0;
      position: relative;
      margin: 0 auto 20px;
      padding: 38px 55px;
      width: 300px;
      height: 420px;
      background: url(../assets/images/search4.png) no-repeat;
      background-size: 100%;
    }
    .module-see .codesign {
      z-index: 1;
      position: absolute;
      top: -22px;
      right: 36px;
      width: 30px;
    }
    .module-see .codehead {
      margin-bottom: 60px;
      font-size: 12px;
      color: #4575E6;
      text-align: center;
    }
    .module-see .phone {
      font-size: 24px;
    }
    .module-see .copy {
      width: 60px;
      height: 24px;
      font-size: 12px;
      color: #4575E6;
      line-height: 2;
      border-radius: 9999px;
    }
    .module-see .copy:after {
      border-color: #4575E6;
      border-radius: 9999px;
    }
    .module-see .searchflex {
      display: -webkit-box;
      display: -webkit-flex;
      display: flex;
      -webkit-box-align: center;
      -webkit-align-items: center;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 15px;
    }
    .module-see .qrcode {
      display: block;
      margin: 0 auto;
      width: 75px;
    }
  }
  @media (min-device-width: 320px) and (max-device-width: 375px) and (-webkit-min-device-pixel-ratio: 2) {
    .chart {
      width: 280px;
    }
  }
  @media (min-device-width: 375px) and (max-device-width: 414px) and (-webkit-min-device-pixel-ratio: 2) {
    .chart {
      width: 350px;
    }
  }
  @media (min-device-width: 414px) and (max-device-width: 736px) and (-webkit-min-device-pixel-ratio: 2) {
    .chart {
      width: 370px;
    }
  }
  @media (min-device-width: 736px) and (max-device-width: 1366px) and (-webkit-min-device-pixel-ratio: 2) {
    .chart {
      width: 680px;
    }
  }



</style>
