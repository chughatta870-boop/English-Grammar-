/* ===================== English Grammar Master — GHS 124/NB ===================== */

/* ---------- TENSES DATA (12 types) ---------- */
const TENSES = [
{
  id:"pres_indef", group:"Present", name:"Present Indefinite (Simple Present)",
  urdu:["تا ہے / تی ہے / تے ہیں","ta hai / ti hai / te hain"],
  structure:"Sub + V1(s/es) + Obj  |  Neg: Sub + do/does + not + V1  |  Q: Do/Does + Sub + V1 + Obj?",
  examples:[
    ["He plays cricket every day.","وہ روزانہ کرکٹ کھیلتا ہے۔"],
    ["She goes to school daily.","وہ روزانہ سکول جاتی ہے۔"],
    ["Birds fly in the sky.","پرندے آسمان میں اڑتے ہیں۔"]
  ],
  speak:"Present Indefinite Tense. Urdu pehchan: ta hai, ti hai, te hain, at the end of the sentence. Structure: Subject plus first form of verb, with s or es for third person singular, plus object. Example: He plays cricket every day. She goes to school daily."
},
{
  id:"pres_cont", group:"Present", name:"Present Continuous (Progressive)",
  urdu:["رہا ہے / رہی ہے / رہے ہیں","raha hai / rahi hai / rahay hain"],
  structure:"Sub + is/am/are + V1+ing + Obj  |  Neg: Sub + is/am/are + not + V1+ing  |  Q: Is/Am/Are + Sub + V1+ing?",
  examples:[
    ["He is playing cricket now.","وہ اب کرکٹ کھیل رہا ہے۔"],
    ["I am doing my homework.","میں اپنا ہوم ورک کر رہا ہوں۔"],
    ["They are coming to school.","وہ سکول آ رہے ہیں۔"]
  ],
  speak:"Present Continuous Tense. Urdu pehchan: raha hai, rahi hai, rahay hain. Structure: Subject plus is, am or are, plus verb ing, plus object. Example: He is playing cricket now. I am doing my homework."
},
{
  id:"pres_perf", group:"Present", name:"Present Perfect",
  urdu:["چکا ہے / چکی ہے / چکے ہیں، یا کر لیا ہے","chuka hai / chuki hai / chukay hain"],
  structure:"Sub + has/have + V3 + Obj  |  Neg: Sub + has/have + not + V3  |  Q: Has/Have + Sub + V3?",
  examples:[
    ["He has finished his work.","اس نے اپنا کام ختم کر لیا ہے۔"],
    ["I have written the letter.","میں نے خط لکھ لیا ہے۔"],
    ["She has gone to market.","وہ بازار جا چکی ہے۔"]
  ],
  speak:"Present Perfect Tense. Urdu pehchan: chuka hai, chuki hai, chukay hain, or kar liya hai. Structure: Subject plus has or have, plus third form of verb, plus object. Example: He has finished his work. I have written the letter."
},
{
  id:"pres_perf_cont", group:"Present", name:"Present Perfect Continuous",
  urdu:["رہا ہے (سے) / رہی ہے (سے)","raha hai...se / rahi hai...se"],
  structure:"Sub + has/have + been + V1+ing + Obj + since/for",
  examples:[
    ["He has been playing since morning.","وہ صبح سے کھیل رہا ہے۔"],
    ["I have been waiting for two hours.","میں دو گھنٹے سے انتظار کر رہا ہوں۔"],
    ["They have been studying since 9 am.","وہ صبح نو بجے سے پڑھ رہے ہیں۔"]
  ],
  speak:"Present Perfect Continuous Tense. Urdu pehchan: raha hai se, rahi hai se, meaning an action started in the past and is still continuing, shown with since or for. Structure: Subject plus has or have been, plus verb ing. Example: He has been playing since morning."
},
{
  id:"past_indef", group:"Past", name:"Past Indefinite (Simple Past)",
  urdu:["تا تھا / تی تھی / تے تھے، یا سادہ ماضی","ta tha / ti thi / tay thay"],
  structure:"Sub + V2 + Obj  |  Neg: Sub + did + not + V1  |  Q: Did + Sub + V1?",
  examples:[
    ["He played cricket yesterday.","اس نے کل کرکٹ کھیلی۔"],
    ["She went to school.","وہ سکول گئی۔"],
    ["I did not go there.","میں وہاں نہیں گیا۔"]
  ],
  speak:"Past Indefinite Tense. Urdu pehchan: ta tha, ti thi, tay thay, or a simple completed past action. Structure: Subject plus second form of verb, plus object. Example: He played cricket yesterday. She went to school."
},
{
  id:"past_cont", group:"Past", name:"Past Continuous",
  urdu:["رہا تھا / رہی تھی / رہے تھے","raha tha / rahi thi / rahay thay"],
  structure:"Sub + was/were + V1+ing + Obj",
  examples:[
    ["He was playing cricket at 5 pm.","وہ پانچ بجے کرکٹ کھیل رہا تھا۔"],
    ["They were watching TV.","وہ ٹی وی دیکھ رہے تھے۔"],
    ["I was doing my homework.","میں اپنا ہوم ورک کر رہا تھا۔"]
  ],
  speak:"Past Continuous Tense. Urdu pehchan: raha tha, rahi thi, rahay thay. Structure: Subject plus was or were, plus verb ing. Example: He was playing cricket at five pm. They were watching T V."
},
{
  id:"past_perf", group:"Past", name:"Past Perfect",
  urdu:["چکا تھا / چکی تھی / چکے تھے","chuka tha / chuki thi / chukay thay"],
  structure:"Sub + had + V3 + Obj (used for the earlier of two past actions)",
  examples:[
    ["He had left before I reached.","میں پہنچنے سے پہلے وہ جا چکا تھا۔"],
    ["She had finished her work by 5 pm.","وہ پانچ بجے تک اپنا کام ختم کر چکی تھی۔"],
    ["The train had left when we arrived.","جب ہم پہنچے تو ٹرین جا چکی تھی۔"]
  ],
  speak:"Past Perfect Tense. Urdu pehchan: chuka tha, chuki thi, chukay thay. Used for the action that happened first, out of two past actions. Structure: Subject plus had, plus third form of verb. Example: He had left before I reached."
},
{
  id:"past_perf_cont", group:"Past", name:"Past Perfect Continuous",
  urdu:["رہا تھا (سے) / رہی تھی (سے)","raha tha...se / rahi thi...se"],
  structure:"Sub + had + been + V1+ing + Obj + since/for",
  examples:[
    ["He had been playing for two hours.","وہ دو گھنٹے سے کھیل رہا تھا۔"],
    ["She had been waiting since morning.","وہ صبح سے انتظار کر رہی تھی۔"],
    ["They had been working since 8 am.","وہ صبح آٹھ بجے سے کام کر رہے تھے۔"]
  ],
  speak:"Past Perfect Continuous Tense. Urdu pehchan: raha tha se, rahi thi se. Shows an action that was continuing up to a certain point in the past. Structure: Subject plus had been, plus verb ing. Example: He had been playing for two hours."
},
{
  id:"fut_indef", group:"Future", name:"Future Indefinite (Simple Future)",
  urdu:["گا / گی / گے","ga / gi / gay"],
  structure:"Sub + will/shall + V1 + Obj",
  examples:[
    ["He will play cricket tomorrow.","وہ کل کرکٹ کھیلے گا۔"],
    ["I shall go to Lahore.","میں لاہور جاؤں گا۔"],
    ["They will come tomorrow.","وہ کل آئیں گے۔"]
  ],
  speak:"Future Indefinite Tense. Urdu pehchan: ga, gi, gay at the end. Structure: Subject plus will or shall, plus first form of verb. Example: He will play cricket tomorrow. I shall go to Lahore."
},
{
  id:"fut_cont", group:"Future", name:"Future Continuous",
  urdu:["رہا ہو گا / رہی ہو گی / رہے ہوں گے","raha ho ga / rahi ho gi / rahay hon gay"],
  structure:"Sub + will/shall + be + V1+ing + Obj",
  examples:[
    ["He will be playing cricket at 5 pm.","وہ پانچ بجے کرکٹ کھیل رہا ہو گا۔"],
    ["I shall be waiting for you.","میں تمہارا انتظار کر رہا ہوں گا۔"],
    ["They will be studying at that time.","وہ اس وقت پڑھ رہے ہوں گے۔"]
  ],
  speak:"Future Continuous Tense. Urdu pehchan: raha ho ga, rahi ho gi, rahay hon gay. Structure: Subject plus will be, plus verb ing. Example: He will be playing cricket at five pm."
},
{
  id:"fut_perf", group:"Future", name:"Future Perfect",
  urdu:["چکا ہو گا / چکی ہو گی / چکے ہوں گے","chuka ho ga / chuki ho gi / chukay hon gay"],
  structure:"Sub + will/shall + have + V3 + Obj",
  examples:[
    ["He will have finished his work by 5 pm.","وہ پانچ بجے تک اپنا کام ختم کر چکا ہو گا۔"],
    ["I shall have written the letter.","میں خط لکھ چکا ہوں گا۔"],
    ["They will have reached by then.","وہ اس وقت تک پہنچ چکے ہوں گے۔"]
  ],
  speak:"Future Perfect Tense. Urdu pehchan: chuka ho ga, chuki ho gi, chukay hon gay. Used for an action that will be completed before a certain future time. Structure: Subject plus will have, plus third form of verb."
},
{
  id:"fut_perf_cont", group:"Future", name:"Future Perfect Continuous",
  urdu:["رہا ہو گا (سے) / رہی ہو گی (سے)","raha ho ga...se / rahi ho gi...se"],
  structure:"Sub + will/shall + have + been + V1+ing + Obj + since/for",
  examples:[
    ["He will have been playing for two hours by 5 pm.","وہ پانچ بجے تک دو گھنٹے سے کھیل رہا ہو گا۔"],
    ["I shall have been working here for five years next month.","اگلے مہینے مجھے یہاں کام کرتے ہوئے پانچ سال ہو جائیں گے۔"],
    ["They will have been studying since morning.","وہ صبح سے پڑھ رہے ہوں گے۔"]
  ],
  speak:"Future Perfect Continuous Tense. Urdu pehchan: raha ho ga se, rahi ho gi se. Shows a continuing action up to a specific point in the future. Structure: Subject plus will have been, plus verb ing."
}
];

/* ---------- NARRATION (Direct to Indirect) ---------- */
const NARRATION_RULES = [
  ["Tense change","Present Indefinite → Past Indefinite; Present Continuous → Past Continuous; Present Perfect → Past Perfect; Past Indefinite → Past Perfect; Will/Shall → Would/Should; Can → Could; May → Might; Must → Had to"],
  ["Pronoun change","First person pronoun changes according to the subject of reporting verb; third person pronoun does not change; second person pronoun changes according to the object of reporting verb."],
  ["Time & place words","today → that day, now → then, tomorrow → the next day, yesterday → the day before, this → that, these → those, here → there, ago → before."],
  ["Statements","Reporting verb 'say/says' stays same if introductory verb is present tense. 'Said to' changes to 'told'. Use 'that' as connective."],
  ["Questions (Yes/No)","Reporting verb changes to 'asked'. Connective becomes 'if' or 'whether'. Sentence order changes to assertive (Sub+Verb), question mark removed."],
  ["Questions (Wh-)","Reporting verb changes to 'asked'. The Wh-word itself (what, where, why, who, when, how) is used as connective."],
  ["Imperative (Order/Request)","Reporting verb changes to 'ordered/commanded' for orders and 'requested' for requests. 'To' is used before the verb; 'not to' for negative commands."],
  ["Exclamatory sentences","Reporting verb changes to 'exclaimed with joy/sorrow/wonder' etc. Interjections (Oh!, Alas!, Hurrah!) are removed and expressed through the verb."]
];
const NARRATION_EXAMPLES = [
  ["Statement","He said, \"I am playing cricket.\"","He said that he was playing cricket."],
  ["Statement (past)","She said, \"I went to school.\"","She said that she had gone to school."],
  ["Yes/No Question","He said to me, \"Do you like tea?\"","He asked me if I liked tea."],
  ["Wh- Question","She said, \"Where do you live?\"","She asked where I lived."],
  ["Command","The teacher said to the boys, \"Sit down.\"","The teacher ordered the boys to sit down."],
  ["Request","He said to me, \"Please help me.\"","He requested me to help him."],
  ["Negative Command","She said, \"Do not make noise.\"","She forbade them to make noise. / She told them not to make noise."],
  ["Exclamatory","He said, \"Alas! I am ruined.\"","He exclaimed with sorrow that he was ruined."],
  ["Wish","She said, \"May you live long!\"","She prayed that I might live long."],
  ["Future","He said, \"I will go to Lahore tomorrow.\"","He said that he would go to Lahore the next day."]
];

/* ---------- VOICE (Active to Passive) ---------- */
const VOICE_RULES = [
  ["General rule","Object of active sentence becomes subject of passive sentence; subject of active becomes object of passive, introduced by 'by'; main verb changes to its 3rd form (V3) and a form of 'be' is added according to tense."],
  ["Present Indefinite","Sub + is/am/are + V3 + by + Obj  →  Rice is eaten by him."],
  ["Present Continuous","Sub + is/am/are + being + V3 + by + Obj  →  Rice is being eaten by him."],
  ["Present Perfect","Sub + has/have + been + V3 + by + Obj  →  Rice has been eaten by him."],
  ["Past Indefinite","Sub + was/were + V3 + by + Obj  →  Rice was eaten by him."],
  ["Past Continuous","Sub + was/were + being + V3 + by + Obj  →  Rice was being eaten by him."],
  ["Past Perfect","Sub + had + been + V3 + by + Obj  →  Rice had been eaten by him."],
  ["Future Indefinite","Sub + will/shall + be + V3 + by + Obj  →  Rice will be eaten by him."],
  ["Future Perfect","Sub + will/shall + have + been + V3 + by + Obj  →  Rice will have been eaten by him."],
  ["Modals (can/may/must)","Sub + modal + be + V3 + by + Obj  →  This work can be done by him."],
  ["Imperative sentences","Let + Obj + be + V3  →  (Open the door.) Let the door be opened."]
];
const VOICE_EXAMPLES = [
  ["Present Indefinite","He writes a letter.","A letter is written by him."],
  ["Present Continuous","She is reading a book.","A book is being read by her."],
  ["Present Perfect","They have finished the work.","The work has been finished by them."],
  ["Past Indefinite","He wrote a letter.","A letter was written by him."],
  ["Past Continuous","She was cooking food.","Food was being cooked by her."],
  ["Past Perfect","He had done the work.","The work had been done by him."],
  ["Future Indefinite","He will help me.","I will be helped by him."],
  ["Modal (can)","He can solve this problem.","This problem can be solved by him."],
  ["Imperative (order)","Open the window.","Let the window be opened."],
  ["Wh- Question","Who wrote this letter?","By whom was this letter written?"]
];

/* ---------- PHRASAL VERBS ---------- */
const PHRASAL_VERBS = [
["Break down","to stop functioning / to become upset","ٹوٹ جانا / خراب ہو جانا","The car broke down on the way."],
["Bring up","to raise a topic / to raise a child","بات چھیڑنا / پرورش کرنا","She brought up an important issue."],
["Call off","to cancel","منسوخ کرنا","They called off the match due to rain."],
["Carry on","to continue","جاری رکھنا","Please carry on with your work."],
["Come across","to find by chance","اتفاقاً ملنا","I came across an old friend yesterday."],
["Cut down on","to reduce","کم کرنا","You should cut down on sugar."],
["Drop out","to leave school/course","تعلیم چھوڑ دینا","He dropped out of college."],
["Fall apart","to break into pieces / collapse","بکھر جانا","The old chair fell apart."],
["Figure out","to understand / solve","سمجھ جانا","I finally figured out the answer."],
["Get along","to have a good relationship","مل جل کر رہنا","They get along very well."],
["Give up","to stop trying / quit","ہار مان لینا","Never give up on your dreams."],
["Go over","to review","دوبارہ دیکھنا / جائزہ لینا","Let's go over the lesson again."],
["Hang out","to spend leisure time","وقت گزارنا","We hung out at the park."],
["Hold on","to wait","انتظار کرنا","Hold on, I'll be there in a minute."],
["Keep up with","to stay at the same pace","ساتھ چلنا / برابر رہنا","It's hard to keep up with him."],
["Look after","to take care of","خیال رکھنا","She looks after her younger brother."],
["Look forward to","to be excited about","بے تابی سے انتظار کرنا","I look forward to your reply."],
["Look into","to investigate","تحقیق کرنا","The police looked into the matter."],
["Make up","to invent / to reconcile","بنانا/ صلح کرنا","They made up after the fight."],
["Pass away","to die","انتقال کرنا","Her grandfather passed away last year."],
["Put off","to postpone","ملتوی کرنا","They put off the meeting."],
["Run out of","to have no more of something","ختم ہو جانا","We ran out of sugar."],
["Set up","to establish","قائم کرنا","He set up a new business."],
["Show up","to arrive/appear","آ جانا / حاضر ہونا","He showed up late for the class."],
["Take off","(plane) to leave ground / to remove","اڑان بھرنا / اتارنا","The plane took off on time."],
["Turn down","to reject","مسترد کرنا","She turned down the offer."],
["Turn up","to arrive / to increase volume","آ جانا / آواز بڑھانا","He turned up unexpectedly."],
["Work out","to exercise / to solve","ورزش کرنا / حل کرنا","I work out every morning."],
["Bring about","to cause to happen","واقع کرنا / لانا","Technology has brought about many changes."],
["Check in","to register at a hotel/airport","اندراج کروانا","We checked in at the hotel."],
["Check out","to leave a hotel / to look at","ہوٹل چھوڑنا / دیکھنا","Please check out this new app."],
["Come up with","to think of an idea","خیال پیش کرنا","She came up with a great plan."],
["Deal with","to handle a situation","نمٹنا","We need to deal with this problem."],
["Fill in","to complete a form","فارم پُر کرنا","Please fill in the application form."],
["Find out","to discover","معلوم کرنا","I need to find out the truth."],
["Get over","to recover from","سنبھلنا / صحت یاب ہونا","It took time to get over the illness."],
["Give in","to surrender / agree reluctantly","ہار ماننا","He finally gave in to their demands."],
["Point out","to indicate","نشاندہی کرنا","The teacher pointed out my mistakes."],
["Put up with","to tolerate","برداشت کرنا","I can't put up with this noise."],
["Set off","to start a journey","سفر شروع کرنا","We set off early in the morning."]
];

/* ---------- IDIOMS ---------- */
const IDIOMS = [
["A blessing in disguise","something good that seemed bad at first","ظاہری برائی میں چھپی بھلائی","Losing that job was a blessing in disguise."],
["Break the ice","to start a conversation in an awkward situation","بات چیت کا آغاز کرنا","He told a joke to break the ice."],
["Burn the midnight oil","to work late into the night","رات گئے تک محنت کرنا","She burned the midnight oil before exams."],
["Once in a blue moon","very rarely","کبھی کبھار","We meet once in a blue moon."],
["Piece of cake","very easy","بہت آسان کام","This test was a piece of cake."],
["Costs an arm and a leg","very expensive","بہت مہنگا","That car costs an arm and a leg."],
["Under the weather","feeling sick","بیمار محسوس کرنا","I'm feeling a bit under the weather today."],
["Hit the books","to study hard","سخت پڑھائی کرنا","I need to hit the books for my exam."],
["Let the cat out of the bag","to reveal a secret","راز افشا کرنا","He let the cat out of the bag about the surprise."],
["Speak of the devil","said when a person appears right after being mentioned","جس کا ذکر ہو وہ آ جانا","Speak of the devil, here he comes!"],
["Add fuel to the fire","to make a bad situation worse","آگ میں تیل ڈالنا","Shouting only added fuel to the fire."],
["Actions speak louder than words","what you do matters more than what you say","کرنی باتوں سے بہتر ہے","Help him instead of promising; actions speak louder than words."],
["Back to square one","to start over again","دوبارہ شروع سے","Our plan failed; we are back to square one."],
["Bite the bullet","to face a difficult situation bravely","مشکل کا ہمت سے سامنا کرنا","He decided to bite the bullet and apologize."],
["Call it a day","to stop working for the day","کام ختم کرنا","Let's call it a day and go home."],
["Cut corners","to do something in the cheapest/easiest way","کام میں کوتاہی کرنا","Don't cut corners on safety."],
["Get the ball rolling","to start something","کام کا آغاز کرنا","Let's get the ball rolling on this project."],
["Hit the nail on the head","to describe exactly what is causing a problem","نکتے کی بات کرنا","You hit the nail on the head with that comment."],
["In the same boat","in the same difficult situation","ایک جیسی مشکل میں ہونا","We are all in the same boat regarding exams."],
["Kill two birds with one stone","to achieve two things with one action","ایک تیر سے دو شکار","Studying while commuting kills two birds with one stone."],
["Miss the boat","to miss an opportunity","موقع گنوانا","If you don't apply now, you'll miss the boat."],
["On thin ice","in a risky situation","خطرناک صورتحال میں","He is on thin ice after his mistakes."],
["Pull yourself together","to calm down and control emotions","خود کو سنبھالنا","Pull yourself together and focus on the exam."],
["See eye to eye","to agree with someone","اتفاق رائے ہونا","We finally saw eye to eye on the plan."],
["Spill the beans","to reveal a secret","راز کھول دینا","She spilled the beans about the party."],
["Take it with a grain of salt","to not take something too seriously","بات کو زیادہ سنجیدہ نہ لینا","Take his advice with a grain of salt."],
["The ball is in your court","it's your decision now","اب فیصلہ آپ کا ہے","I've done my part; the ball is in your court."],
["Throw in the towel","to give up","ہار مان لینا","After many failures, he threw in the towel."],
["Time flies","time passes very quickly","وقت جلدی گزر جاتا ہے","Time flies when you're having fun."],
["Under the table","secretly / illegally","خفیہ طور پر","The deal was made under the table."],
["Weather the storm","to survive a difficult period","مشکل وقت گزارنا","The company managed to weather the storm."],
["A dime a dozen","very common, of little value","عام سی چیز","Such phones are a dime a dozen nowadays."],
["Beat around the bush","to avoid saying something directly","اِدھر اُدھر کی باتیں کرنا","Stop beating around the bush and answer me."],
["By the skin of your teeth","just barely","بال بال بچنا","He passed the exam by the skin of his teeth."],
["Cry over spilt milk","to worry about something that can't be changed","گزری بات پر افسوس کرنا","There's no use crying over spilt milk."],
["Every cloud has a silver lining","there is something good in every bad situation","ہر مشکل میں کچھ بھلائی ہوتی ہے","He lost the game but made new friends — every cloud has a silver lining."],
["Go the extra mile","to make an extra effort","اضافی کوشش کرنا","She always goes the extra mile for her students."],
["Head over heels","completely in love / deeply","دل و جان سے","He is head over heels for his studies."],
["It's raining cats and dogs","raining heavily","موسلادھار بارش","We stayed inside; it was raining cats and dogs."],
["Jump on the bandwagon","to join a popular trend","مقبول رجحان میں شامل ہونا","Many companies jumped on the bandwagon of online classes."]
];

/* ---------- PAIR OF WORDS (100 confused word pairs) ---------- */
const PAIRS = [
["Accept","to receive / agree","Except","excluding"],
["Advice","suggestion (noun)","Advise","to suggest (verb)"],
["Affect","to influence (verb)","Effect","result (noun)"],
["Alter","to change","Altar","a raised place in a church"],
["Aloud","audibly","Allowed","permitted"],
["Bare","empty/naked","Bear","to tolerate / an animal"],
["Berth","a sleeping place","Birth","being born"],
["Born","to come into life","Borne","carried"],
["Brake","device to stop a vehicle","Break","to cause to separate into pieces"],
["Breath","air taken in (noun)","Breathe","to take air (verb)"],
["Canvas","a type of cloth","Canvass","to seek votes/support"],
["Cell","a small room / biological unit","Sell","to give for money"],
["Cite","to quote","Sight","the ability to see"],
["Coarse","rough","Course","a path / subject of study"],
["Complement","that which completes","Compliment","praise"],
["Council","an assembly","Counsel","advice"],
["Current","present / flow of water","Currant","a small dried fruit"],
["Dairy","place for milk products","Diary","a daily record book"],
["Desert","dry sandy area / to abandon","Dessert","sweet dish after meal"],
["Dew","moisture on grass","Due","owed / expected"],
["Die","to lose life","Dye","to color"],
["Elicit","to draw out","Illicit","illegal"],
["Emigrate","to leave one's country","Immigrate","to enter another country"],
["Eminent","famous","Imminent","about to happen"],
["Envelop","to wrap/cover (verb)","Envelope","a paper cover for a letter"],
["Fair","just / a carnival","Fare","travel fee"],
["Farther","physical distance","Further","additional / figurative distance"],
["Flour","ground wheat","Flower","a bloom of a plant"],
["Formally","officially","Formerly","previously"],
["Gorilla","a large ape","Guerrilla","an irregular soldier"],
["Grate","to shred / metal frame","Great","large/important"],
["Hear","to perceive sound","Here","this place"],
["Heal","to cure","Heel","back part of the foot"],
["Human","of mankind","Humane","kind, compassionate"],
["Idle","not active","Idol","an object of worship"],
["Its","possessive of it","It's","it is / it has"],
["Knew","past of know","New","not old"],
["Knight","a titled warrior","Night","time after dusk"],
["Lead","a metal / to guide (present)","Led","past tense of lead"],
["Loose","not tight","Lose","to fail to keep/win"],
["Meat","flesh used as food","Meet","to come together"],
["Moral","ethical lesson","Morale","confidence/spirit"],
["Mourning","grieving","Morning","early part of the day"],
["Naval","related to navy","Navel","the belly button"],
["Oral","spoken","Aural","related to hearing"],
["Passed","past tense of pass","Past","time gone by"],
["Patience","the ability to wait calmly","Patients","people under medical care"],
["Peace","absence of war","Piece","a part of something"],
["Peer","an equal / to look closely","Pier","a platform over water"],
["Personal","private/individual","Personnel","staff of an organization"],
["Plain","simple / a flat land","Plane","an aircraft / flat surface"],
["Pray","to worship","Prey","an animal hunted for food"],
["Principal","head of a school / main","Principle","a fundamental rule"],
["Quiet","silent","Quite","completely/fairly"],
["Rain","water falling from sky","Reign","to rule"],
["Right","correct / opposite of left","Rite","a ceremony"],
["Root","part of a plant","Route","a path/way"],
["Scene","a view / part of a play","Seen","past participle of see"],
["Sole","only / bottom of foot","Soul","the spirit"],
["Stationary","not moving","Stationery","writing materials"],
["Steal","to take without permission","Steel","a strong metal"],
["Straight","without a bend","Strait","a narrow channel of water"],
["Their","possessive of they","There","that place"],
["Threw","past tense of throw","Through","from one side to another"],
["Waist","middle part of the body","Waste","to use carelessly"],
["Weak","not strong","Week","seven days"],
["Weather","climate condition","Whether","if (conjunction)"],
["Which","asking about choice","Witch","a woman with magic powers"],
["Whole","complete","Hole","an opening/gap"],
["Wood","material from trees","Would","past form of will"],
["Your","possessive of you","You're","you are"],
["Aisle","a passage between seats","Isle","an island"],
["Ascent","the act of rising","Assent","agreement"],
["Bough","branch of a tree","Bow","to bend forward"],
["Bridal","related to a bride","Bridle","a horse's head harness"],
["Cereal","grain food","Serial","in a series/sequence"],
["Chord","musical notes together","Cord","a thin rope/string"],
["Colonel","a military rank","Kernel","the core of a nut/seed"],
["Complacent","self-satisfied","Compliant","obedient/following rules"],
["Council","a governing body","Counsel","legal advice/advisor"],
["Cue","a signal/hint","Queue","a line of people"],
["Descent","going down","Dissent","disagreement"],
["Discreet","careful/tactful","Discrete","separate/distinct"],
["Draft","a rough version","Draught","a current of air"],
["Faint","weak / to lose consciousness","Feint","a pretended attack"],
["Foul","unfair / offensive","Fowl","a bird, especially poultry"],
["Grisly","gruesome","Grizzly","a type of bear"],
["Hoard","to store secretly","Horde","a large crowd"],
["Hostel","lodging for travelers/students","Hostile","unfriendly"],
["Illicit","not legal","Elicit","to bring out a response"],
["Lessen","to reduce","Lesson","something taught"],
["Licence","permit (noun, British)","License","to permit (verb)"],
["Mantel","a shelf above fireplace","Mantle","a cloak / the earth's layer"],
["Miner","one who works in mines","Minor","less important / underage person"],
["Palate","sense of taste","Palette","board for mixing paint"],
["Pedal","foot lever of a bicycle","Peddle","to sell goods"],
["Precede","to come before","Proceed","to go ahead"],
["Prophecy","a prediction (noun)","Prophesy","to predict (verb)"],
["Residence","a place to live","Residents","people who live there"],
["Vain","excessively proud","Vein","a blood vessel"],
["Wander","to roam about","Wonder","to feel curious/amazed"]
];

/* ===================== APP LOGIC ===================== */
const content = document.getElementById('content');
const tabs = document.querySelectorAll('.tab');
const toast = document.getElementById('toast');
let currentTab = 'tenses';
let currentUtterance = null;

function showToast(msg){
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(()=>toast.classList.remove('show'), 1800);
}

/* ---- Speech (Text to Speech) ---- */
function speakText(text, btn){
  if(!('speechSynthesis' in window)){
    showToast('Speech not supported on this device');
    return;
  }
  if(currentUtterance && speechSynthesis.speaking){
    speechSynthesis.cancel();
    document.querySelectorAll('.speak-btn.speaking').forEach(b=>{b.classList.remove('speaking');b.textContent='🔊';});
    if(currentUtterance._btn === btn){ currentUtterance = null; return; }
  }
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = 'en-US';
  utter.rate = 0.92;
  utter.pitch = 1;
  utter._btn = btn;
  utter.onstart = ()=>{ if(btn){btn.classList.add('speaking'); btn.textContent='⏹';} };
  utter.onend = ()=>{ if(btn){btn.classList.remove('speaking'); btn.textContent='🔊';} currentUtterance=null; };
  utter.onerror = ()=>{ if(btn){btn.classList.remove('speaking'); btn.textContent='🔊';} };
  currentUtterance = utter;
  speechSynthesis.speak(utter);
}

/* ---- Renderers ---- */
function renderTenses(){
  let groups = ['Present','Past','Future'];
  let html = `<div class="section-head"><h2>Tenses — All Types</h2><span>${TENSES.length} tenses</span></div>`;
  groups.forEach(g=>{
    html += `<h3 style="color:#8b8266;font-size:.8rem;letter-spacing:1px;text-transform:uppercase;margin:16px 0 6px;">${g} Tenses</h3>`;
    TENSES.filter(t=>t.group===g).forEach(t=>{
      html += `<div class="card" data-search="${(t.name+' '+t.urdu.join(' ')).toLowerCase()}">
        <h3>${t.name} <button class="speak-btn" data-speak="${encodeURIComponent(t.speak)}">🔊</button></h3>
        <div class="pill-row">${t.urdu.map(u=>`<span class="urdu-tag">${u}</span>`).join('')}</div>
        <div class="structure"><b>Structure:</b> ${t.structure}</div>
        <ul class="examples">
          ${t.examples.map(e=>`<li><div class="ex-en">${e[0]}</div><div class="ex-ur">${e[1]}</div></li>`).join('')}
        </ul>
      </div>`;
    });
  });
  content.innerHTML = html;
}

function renderNarration(){
  let html = `<div class="section-head"><h2>Direct → Indirect Narration</h2><span>Rules & Examples</span></div>`;
  html += `<div class="card"><h3>Key Rules</h3><table class="gram-table"><tr><th>Rule</th><th>Detail</th></tr>`;
  NARRATION_RULES.forEach(r=>{ html += `<tr data-search="${(r[0]+' '+r[1]).toLowerCase()}"><td><b>${r[0]}</b></td><td>${r[1]}</td></tr>`; });
  html += `</table></div>`;
  html += `<h3 style="color:#8b8266;font-size:.8rem;letter-spacing:1px;text-transform:uppercase;margin:16px 0 6px;">Solved Examples</h3>`;
  NARRATION_EXAMPLES.forEach((e,i)=>{
    html += `<div class="card" data-search="${(e[0]+' '+e[1]+' '+e[2]).toLowerCase()}">
      <h3>${i+1}. ${e[0]} <button class="speak-btn" data-speak="${encodeURIComponent('Direct: '+e[1]+'  Indirect: '+e[2])}">🔊</button></h3>
      <div class="structure"><b>Direct:</b> ${e[1]}</div>
      <div class="structure"><b>Indirect:</b> ${e[2]}</div>
    </div>`;
  });
  content.innerHTML = html;
}

function renderVoice(){
  let html = `<div class="section-head"><h2>Active → Passive Voice</h2><span>Rules & Examples</span></div>`;
  html += `<div class="card"><h3>Key Rules & Formulas</h3><table class="gram-table"><tr><th>Tense</th><th>Formula / Rule</th></tr>`;
  VOICE_RULES.forEach(r=>{ html += `<tr data-search="${(r[0]+' '+r[1]).toLowerCase()}"><td><b>${r[0]}</b></td><td>${r[1]}</td></tr>`; });
  html += `</table></div>`;
  html += `<h3 style="color:#8b8266;font-size:.8rem;letter-spacing:1px;text-transform:uppercase;margin:16px 0 6px;">Solved Examples</h3>`;
  VOICE_EXAMPLES.forEach((e,i)=>{
    html += `<div class="card" data-search="${(e[0]+' '+e[1]+' '+e[2]).toLowerCase()}">
      <h3>${i+1}. ${e[0]} <button class="speak-btn" data-speak="${encodeURIComponent('Active: '+e[1]+'  Passive: '+e[2])}">🔊</button></h3>
      <div class="structure"><b>Active:</b> ${e[1]}</div>
      <div class="structure"><b>Passive:</b> ${e[2]}</div>
    </div>`;
  });
  content.innerHTML = html;
}

function renderPhrasal(){
  let html = `<div class="section-head"><h2>Phrasal Verbs</h2><span>${PHRASAL_VERBS.length} verbs</span></div>`;
  PHRASAL_VERBS.forEach((p,i)=>{
    html += `<div class="card" data-search="${(p[0]+' '+p[1]+' '+p[3]).toLowerCase()}">
      <h3>${i+1}. ${p[0]} <button class="speak-btn" data-speak="${encodeURIComponent(p[0]+'. Meaning: '+p[1]+'. Example: '+p[3])}">🔊</button></h3>
      <div class="meaning">${p[1]} <span class="mean-ur">— ${p[2]}</span></div>
      <div class="ex-en">e.g. ${p[3]}</div>
    </div>`;
  });
  content.innerHTML = html;
}

function renderIdioms(){
  let html = `<div class="section-head"><h2>Idioms</h2><span>${IDIOMS.length} idioms</span></div>`;
  IDIOMS.forEach((p,i)=>{
    html += `<div class="card" data-search="${(p[0]+' '+p[1]+' '+p[3]).toLowerCase()}">
      <h3>${i+1}. ${p[0]} <button class="speak-btn" data-speak="${encodeURIComponent(p[0]+'. Meaning: '+p[1]+'. Example: '+p[3])}">🔊</button></h3>
      <div class="meaning">${p[1]} <span class="mean-ur">— ${p[2]}</span></div>
      <div class="ex-en">e.g. ${p[3]}</div>
    </div>`;
  });
  content.innerHTML = html;
}

function renderPairs(){
  let html = `<div class="section-head"><h2>Pair of Words (VIP)</h2><span>${PAIRS.length} pairs</span></div><div class="pair-grid">`;
  PAIRS.forEach((p,i)=>{
    html += `<div class="pair-card" data-search="${(p[0]+' '+p[1]+' '+p[2]+' '+p[3]).toLowerCase()}">
      <div class="pair-num">#${i+1}</div>
      <div><span class="pair-word">${p[0]}</span><span class="pair-sep">—</span>${p[1]}</div>
      <div><span class="pair-word">${p[2]}</span><span class="pair-sep">—</span>${p[3]}</div>
    </div>`;
  });
  html += `</div>`;
  content.innerHTML = html;
}

const RENDERERS = {
  tenses: renderTenses,
  narration: renderNarration,
  voice: renderVoice,
  phrasal: renderPhrasal,
  idioms: renderIdioms,
  pairs: renderPairs
};

function renderTab(tab){
  currentTab = tab;
  RENDERERS[tab]();
  document.getElementById('searchInput').value='';
  window.scrollTo({top:0,behavior:'smooth'});
}

/* ---- Tab click handling ---- */
tabs.forEach(tab=>{
  tab.addEventListener('click', ()=>{
    tabs.forEach(t=>t.classList.remove('active'));
    tab.classList.add('active');
    renderTab(tab.dataset.tab);
  });
});

/* ---- Speak button delegation ---- */
content.addEventListener('click', (e)=>{
  const btn = e.target.closest('.speak-btn');
  if(btn){
    const text = decodeURIComponent(btn.dataset.speak);
    speakText(text, btn);
  }
});

/* ---- Search ---- */
const searchToggle = document.getElementById('searchToggle');
const searchBar = document.getElementById('searchBar');
const searchInput = document.getElementById('searchInput');
searchToggle.addEventListener('click', ()=>{
  searchBar.classList.toggle('hidden');
  if(!searchBar.classList.contains('hidden')) searchInput.focus();
});
searchInput.addEventListener('input', ()=>{
  const q = searchInput.value.trim().toLowerCase();
  const items = content.querySelectorAll('[data-search]');
  items.forEach(item=>{
    item.style.display = (!q || item.dataset.search.includes(q)) ? '' : 'none';
  });
});

/* ---- Copy / Download / Share ---- */
function getSectionText(){
  const title = content.querySelector('.section-head h2')?.textContent || 'English Grammar';
  let text = `${title}\n(M Ijaz - GHS 124/NB)\n\n`;
  content.querySelectorAll('.card, .pair-card').forEach(card=>{
    text += card.innerText.replace(/🔊|⏹/g,'').trim() + '\n\n';
  });
  return text;
}

document.getElementById('copyBtn').addEventListener('click', async ()=>{
  const text = getSectionText();
  try{
    await navigator.clipboard.writeText(text);
    showToast('Copied to clipboard ✅');
  }catch(err){
    const ta = document.createElement('textarea');
    ta.value = text; document.body.appendChild(ta); ta.select();
    document.execCommand('copy'); document.body.removeChild(ta);
    showToast('Copied to clipboard ✅');
  }
});

document.getElementById('downloadBtn').addEventListener('click', ()=>{
  const text = getSectionText();
  const blob = new Blob([text], {type:'text/plain'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${currentTab}_M-Ijaz_GHS124NB.txt`;
  document.body.appendChild(a); a.click(); document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast('Downloaded ⬇️');
});

document.getElementById('shareBtn').addEventListener('click', async ()=>{
  const text = getSectionText();
  if(navigator.share){
    try{
      await navigator.share({title:'English Grammar Master - GHS 124/NB', text});
    }catch(err){ /* user cancelled */ }
  }else{
    try{
      await navigator.clipboard.writeText(text);
      showToast('Share not supported — copied instead 📋');
    }catch(e){ showToast('Unable to share on this device'); }
  }
});

/* ---- PWA Install prompt ---- */
let deferredPrompt;
const installBtn = document.getElementById('installBtn');
window.addEventListener('beforeinstallprompt', (e)=>{
  e.preventDefault();
  deferredPrompt = e;
  installBtn.classList.remove('hidden');
});
installBtn.addEventListener('click', async ()=>{
  if(!deferredPrompt) return;
  deferredPrompt.prompt();
  await deferredPrompt.userChoice;
  deferredPrompt = null;
  installBtn.classList.add('hidden');
});
window.addEventListener('appinstalled', ()=>{
  installBtn.classList.add('hidden');
  showToast('App installed ✅');
});

/* ---- Service Worker registration ---- */
if('serviceWorker' in navigator){
  window.addEventListener('load', ()=>{
    navigator.serviceWorker.register('sw.js').catch(()=>{});
  });
}

/* ---- Init ---- */
renderTab('tenses');
