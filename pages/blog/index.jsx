import React from "react";
import { useRouter } from "next/router";
import en from "../../locale/en";
import ar from "../../locale/ar";
import { Blog } from "../../components";
import Image from "next/image";

const Index = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : ar;

  return (
    <main className="mt-40 max-w-7xl mx-auto">
      <Blog title="ماهو الWeb 3" titleEn="What is Web 3?" date={new Date("2021-11-21 5:22 PM")}>
        <div className="w-full h-64 relative mb-5">
          <Image className="rounded-md" src="/web3.png" fill style={{ objectFit: "cover" }} alt="cover" />
        </div>

        <div className="text-white text-md mb-3">
          {locale === "en"
            ? "Most of us have primarily experienced the web in its current form, commonly referred to as web2. You can think of web2 as the interactive and social web. Web2 is simple, really, and because of its simplicity more and more people around the world are becoming creators. [1]"
            : "لقد اختبر معظمنا الويب بشكل أساسي في شكله الحالي ، والذي يشار إليه عادةً باسم الويب 2. يمكنك التفكير في شبكة الويب 2 على أنها شبكة الويب التفاعلية والاجتماعية. Web2 بسيط ، حقًا ، وبسبب بساطته ، أصبح المزيد والمزيد من الناس حول العالم مبدعين. [1]"}
        </div>

        <div className="text-white text-md mb-3">
          {locale === "en"
            ? "The web in its current form is really great in many ways, but there are some areas where we can do a lot better. [1]"
            : "يعد الويب في شكله الحالي رائعًا حقًا من نواحٍ عديدة ، ولكن هناك بعض المجالات حيث يمكننا القيام بالكثير بشكل أفضل. [1]"}
        </div>

        <div className="text-white text-md mb-3">
          {locale === "en"
            ? "Web3, also known as Web 3.0, is an idea for a version of the Internet that is decentralized and based on public blockchains. The concept gained popularity in 2020 and 2021 with interest from cryptocurrency enthusiasts and investments from high-profile technologists and companies. [2]"
            : "Web3 ، المعروف أيضًا باسم Web 3.0 ، هو فكرة لنسخة من الإنترنت لا مركزية وتعتمد على سلاسل الكتل العامة. اكتسب هذا المفهوم شعبية في عامي 2020 و 2021 باهتمام عشاق العملات المشفرة واستثمارات من تقنيين وشركات بارزة. [2]"}
        </div>

        <div className="text-white text-md mb-3">
          {locale === "en"
            ? "A blockchain is a distributed database that is shared among the nodes of a computer network. As a database, a blockchain stores information electronically in digital format. Blockchains are best known for their crucial role in cryptocurrency systems, such as Bitcoin, for maintaining a secure and decentralized record of transactions. The innovation with a blockchain is that it guarantees the fidelity and security of a record of data and generates trust without the need for a trusted third party. [3]"
            : "blockchain هي قاعدة بيانات موزعة يتم مشاركتها بين عقد شبكة الكمبيوتر. كقاعدة بيانات ، تقوم blockchain بتخزين المعلومات إلكترونيًا بتنسيق رقمي. تشتهر Blockchains بدورها الحاسم في أنظمة العملة المشفرة ، مثل Bitcoin ، للحفاظ على سجل آمن ولامركزي للمعاملات. يتمثل الابتكار في blockchain في أنه يضمن دقة وأمان سجل البيانات ويولد الثقة دون الحاجة إلى طرف ثالث موثوق به. [3]"}
        </div>

        <div className="text-yellow-500 text-lg font-bold my-5">
          {locale === "en" ? "Differences between Web 2 and Web 3 [4]" : "الاختلافات بين الويب 2 والويب 3 [4]"}
        </div>

        <div className="flex flex-col">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden sm:rounded-lg">
                <table className="min-w-full">
                  <thead className="bg-gray-900">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-md font-bold text-gray-500 uppercase tracking-wider"
                      >
                        Web 2
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-md font-bold text-gray-500 uppercase tracking-wider"
                      >
                        Web 3
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-gray-700 divide-y divide-gray-500">
                    <tr>
                      <td className="px-6 py-4">
                        <div className="text-sm text-white">
                          {locale === "en"
                            ? "Twitter can censor any account or tweet"
                            : "يمكن لتويتر أن يفرض رقابة على أي حساب أو تغريدة"}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-white">
                          {locale === "en"
                            ? "Web3 tweets would be uncensorable because control is decentralized"
                            : "ستكون تغريدات Web3 غير خاضعة للرقابة لأن التحكم لا مركزي"}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">
                        <div className="text-sm text-white">
                          {locale === "en"
                            ? "Payment service may decide to not allow payments for certain types of work"
                            : "قد تقرر خدمة الدفع عدم السماح بمدفوعات لأنواع معينة من العمل"}
                        </div>
                      </td>
                      <td className="px-6 py-4 ">
                        <div className="text-sm text-white">
                          {locale === "en"
                            ? "Web3 payment apps require no personal data and can not prevent payments."
                            : "لا تتطلب تطبيقات الدفع في Web3 أي بيانات شخصية ولا يمكنها منع المدفوعات"}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">
                        <div className="text-sm text-white">
                          {locale === "en"
                            ? "Servers for gig-economy apps could go down and affect worker income"
                            : "يمكن أن تنخفض خوادم تطبيقات gig-Economy وتؤثر على دخل العمال"}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-white">
                          {locale === "en"
                            ? "Web3 servers can not go down – they use Ethereum, a decentralized network of 1000s of computers as their backend"
                            : "لا يمكن أن تتعطل خوادم Web3 - فهي تستخدم Ethereum ، وهي شبكة لامركزية من آلاف أجهزة الكمبيوتر كخلفية لها"}
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="text-yellow-500 text-lg font-bold my-5">
          {locale === "en" ? "Web 3 limitations [4]" : "قيود الويب 3 [4]"}
        </div>

        <ul className="list-disc mx-5 text-white">
          <li>
            {locale === "en"
              ? "Scalability – transactions are slower on web3 because they are decentralized. Changes to state, like a payment, need to be processed by a miner and propagated throughout the network."
              : "قابلية التوسع - تكون المعاملات أبطأ على الويب 3 لأنها لا مركزية. التغييرات التي يتم إجراؤها على الحالة ، مثل الدفع ، يجب معالجتها بواسطة عامل منجم ونشرها عبر الشبكة."}
          </li>
          <li>
            {locale === "en"
              ? "UX – interacting with web3 applications can require extra steps, software, and education. This can be a hurdle to adoption."
              : "تجربة المستخدم - قد يتطلب التفاعل مع تطبيقات الويب 3 خطوات وبرامج وتعليمًا إضافيًا. يمكن أن يكون هذا عقبة أمام التبني."}
          </li>
          <li>
            {locale === "en"
              ? "Accessibility – the lack of integration in modern web browsers makes web3 less accessible to most users."
              : "إمكانية الوصول - يؤدي عدم وجود تكامل في متصفحات الويب الحديثة إلى جعل الوصول إلى الويب 3 أقل سهولة بالنسبة لمعظم المستخدمين."}
          </li>
          <li>
            {locale === "en"
              ? "Cost – most successful dapps put very small portions of their code on the blockchain as it is expensive."
              : "التكلفة - أنجح تطبيقات dapps تضع أجزاء صغيرة جدًا من التعليمات البرمجية الخاصة بها على blockchain لأنها باهظة الثمن."}
          </li>
        </ul>

        <div className="mt-5 text-white font-bold">{locale === "en" ? "For more.." : "للمزيد.."}</div>

        <div className="mt-3 text-yellow-300">
          [1]{" "}
          <a href="https://www.freecodecamp.org/news/what-is-web3/">https://www.freecodecamp.org/news/what-is-web3/</a>
        </div>

        <div className="mt-3 text-yellow-300">
          [2] <a href="https://en.wikipedia.org/wiki/Web3">https://en.wikipedia.org/wiki/Web3</a>
        </div>

        <div className="mt-3 text-yellow-300 break-words">
          [3]{" "}
          <a href="https://www.investopedia.com/terms/b/blockchain.asp">
            https://www.investopedia.com/terms/b/blockchain.asp
          </a>
        </div>

        <div className="mt-3 text-yellow-300 break-words">
          [4]{" "}
          <a href="https://ethereum.org/en/developers/docs/web2-vs-web3/">
            https://ethereum.org/en/developers/docs/web2-vs-web3/
          </a>
        </div>
      </Blog>
    </main>
  );
};

export default Index;
