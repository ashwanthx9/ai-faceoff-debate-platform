
document.write(`
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&family=Viga&display=swap');

        .hidden {
            display: none !important;
        }

        .bg-mushroom-100 {
            --tw-bg-opacity: 1;
            background-color: rgb(233 230 222 / var(--tw-bg-opacity, 1));
        }

        .btn-primary,
        .btn-primary:hover,
        .btn-primary:active,
        .btn-primary:visited,
        .btn-primary:focus {
             background-color: #8064A2 !important;
             border-color: #8064A2 !important;
         }

         .btn-grad-red {background-image: linear-gradient(to right, #000000 0%, #e74c3c  51%, #000000  100%)}
         .btn-grad-red {
            margin: 10px;
            padding: 15px 45px;
            text-align: center;
            text-transform: uppercase;
            transition: 0.5s;
            background-size: 200% auto;
            color: white;            
            box-shadow: 0 0 20px #eee;
            border-radius: 10px;
            display: block;
          }

          .btn-grad-red:hover {
            background-position: right center; /* change the direction of the change here */
            color: #fff;
            text-decoration: none;
          }
         
         .judge-header-bg,
         .btn-grad { background-image: linear-gradient(to right, #DC2424 0%, #4A569D  51%, #DC2424  100%)}
         .btn-grad {
            margin: 10px;
            padding: 15px 45px;
            text-align: center;
            text-transform: uppercase;
            transition: 0.5s;
            background-size: 200% auto;
            color: white;            
            box-shadow: 0 0 20px #eee;
            border-radius: 10px;
            display: block;
          }

          .btn-grad:disabled { color: #f5f5f5 }
          .btn-grad:hover {
            background-position: right center; /* change the direction of the change here */
            color: #fff;
            text-decoration: none;
          }
         
        // .card {
        //     border-radius: 0% !important;
        // }

        // .card-header:first-child {
        //     border-radius: 0% !important;
        // }

        .card-header {
            padding: var(--bs-card-cap-padding-y) var(--bs-card-cap-padding-x);
            margin-bottom: 0;
            color: var(--bs-card-cap-color);
            background-color: var(--bs-card-cap-bg);
            border: var(--bs-card-border-width) solid var(--bs-card-border-color);
        }

        /* Loader styles */
        .loader {
            border: 4px solid #f3f3f3;
            border-top: 4px solid #707070;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            animation: spin 1s linear infinite;
            transform: translate(-50%, -50%);
            z-index: 9999;
            margin: auto;
            display: none;
        }

        input {
            font-size: 14px !important;
            padding: 1rem !important;
            letter-spacing: 0.023em !important;
        }

        /* Animation */
        @keyframes spin {
            0% {
                transform: rotate(0deg);
            }

            100% {
                transform: rotate(360deg);
            }
        }

        #message,
        .ai-title,
        #eventList>li,
        #ai1Argument,
        #ai2Argument {
            font-size: 12px;
            letter-spacing: 0.002em;
        }

        #message {
            padding: 0.5rem;
            border-radius: 0% !important;
        }

        .labelText {
            font-size: 14px !important;
            letter-spacing: 0.002em !important;
        }

        #dynamicInputContainer>input {
            height: 40px !important;
        }

        body {
            margin: 0;
            padding: 0;
            font-family: "Rubik", sans-serif !important;
            box-sizing: border-box;
            background-color: #fafafa;
        }

        input,
        button {
            border-radius: 0% !important;
        }

        textarea {
            max-height: 1560.75px;
            height: 61px;
            overflow-y: scroll;
        }

        #opening {
            font-family: "Viga", sans-serif;
            width: 100%;
            background: url('https://ancientbrain.com/uploads/sandyaj/homepage4.jpg');
            height: 100vh;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
        }

        #openingBtn {
            width: 400px;
            margin: 0;
            position: absolute;
            top: 50%;
            display: flex;
            left: 35%;
            font-size: 18px !important;
            -ms-transform: translateY(-50%);
            transform: translateY(-50%);
        }

        #debateContainer {
            width: 100%;
            background: url('https://ancientbrain.com/uploads/sandyaj/stage.jpg');
            min-height: 100%;
            background-position: center;
            background-repeat: repeat;
            background-size: cover;
        }
        
        .pt-7rem {
            padding-top: 7rem !important;
        }
        
    </style>
  <div id="opening">
        <div id="openingBtn">
            <button onclick="start()" class="btn btn-primary btn-grad-red btn-xl mx-auto p-4">Start!</button>
        </div>
    </div>
    <div class="hidden" id="debateContainer">
        <div class="container bg-transparent">
            <!-- <nav class="nav navbar bg-light text-bg-light p-3 mb-4">A Futuristic Debate</nav> -->
            <div class="row pt-7rem pb-4">
                <div class="col-xl-9">
                    <section id="keySection">
                        <div id="initForm" class="card p-4">
                            <div class="row mb-1">
                                <div class="col-md-2">
                                    <h2 class="labelText my-2">Choose the Model to Support the Topic</h2>
                                </div>
                                <div class="col-md-4 my-2">
                                    <div class="d-flex gap-3">
                                        <label class="labelText">
                                            <input type="radio" name="supporterAI" value="gemini"
                                                onclick="handleAIChange()" />
                                            Google Gemini
                                        </label>
                                        <label class="labelText">
                                            <input type="radio" name="supporterAI" value="cohere"
                                                onclick="handleAIChange()" />
                                            Cohere AI
                                        </label>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div id="dynamicInputContainer">
                                        <input type="text" class="form-control form-control-sm w-100" disabled
                                            placeholder="Enter Your API Key to Proceed" id="sAPIKeyInput"
                                            oninput="handleSAPIKeyInputChange()" />
                                    </div>
                                </div>
                                <div class="col-md-2">
                                    <button id="sAPIKeyBtn" onclick="selectSupporterAI()"
                                        class="btn btn-primary rounded-0" disabled>
                                        Continue
                                    </button>
                                </div>
                            </div>
                            <div id="opposerAI-container" class="row mb-1 hidden">
                                <div class="col-md-4">
                                    <h2 class="labelText my-2">Model to Oppose the Topic</h2>
                                </div>
                                <div class="col-md-2 my-2">
                                    <div class="d-flex gap-3 text-center">
                                        <div id="opposerAi" class="labelText"></div>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div id="dynamicInputContainer">
                                        <input type="text" class="form-control form-control-sm w-100"
                                            placeholder="Enter Your API Key to Proceed" id="oAPIKeyInput"
                                            oninput="handleOAPIKeyInputChange()" />
                                    </div>
                                </div>
                                <div class="col-md-2">
                                    <button id="oAPIKeyBtn" onclick="selectOpposerAI()"
                                        class="btn btn-primary rounded-0" disabled>
                                        Continue
                                    </button>
                                </div>
                            </div>
                            <div id="judgeAI-container" class="row hidden">
                                <div class="col-md-4">
                                    <h2 class="labelText my-2">Model to Evaluate the Debate</h2>
                                </div>
                                <div class="col-md-2 my-2">
                                    <div class="d-flex gap-3 text-center">
                                        <label id="judgeAi" class="labelText">OpenAI - GPT</label>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div id="dynamicInputContainer">
                                        <input type="text" class="form-control form-control-sm w-100"
                                            placeholder="Enter Your API Key to Proceed" id="jAPIKeyInput"
                                            oninput="handleJAPIKeyInputChange()" />
                                    </div>
                                </div>
                                <div class="col-md-2">
                                    <button id="jAPIKeyBtn" onclick="selectJudgeAI()" class="btn btn-primary rounded-0"
                                        disabled>
                                        Continue
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="debateSection" class="hidden">
                        <div class="card p-3">
                           <!-- <div class="card-header">A Futuristic Debate</div> -->
                            <div class="card-body">
                                <form id="debateForm" onsubmit="startDebate(event)">
                                    <div class="row">
                                        <div class="col-md-10">
                                            <input type="text" placeholder="Provide the Debate Topic Here" id="debateInput"
                                                class="form-control" />
                                            <div id="message" class="alert alert-danger hidden my-1"></div>
                                        </div>
                                        <div class="col-md-2">
                                            <button type="submit" class="btn btn-primary w-100 h-100">
                                                Start
                                            </button>
                                        </div>
                                    </div>
                                </form>
                                <hr />
                                <div class="my-2">
                                    <button class="btn btn-secondary btn-sm" onclick="changeAI()">Switch Model
                                        AI</button>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="card w-100 my-2">
                                            <div class="card-header fs-6">
                                                Arguments in Favor
                                                <span id="supporterLabel" class="badge text-bg-primary"></span>
                                            </div>
                                            <div class="card-body">
                                                <div class="loader" id="AI1-loader"></div>
                                                <div id="ai1Argument"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="card w-100 my-2">
                                            <div class="card-header fs-6">
                                                Arguments Against
                                                <span id="opposerLabel" class="badge text-bg-primary"></span>
                                            </div>
                                            <div class="card-body">
                                                <div class="loader" id="AI2-loader"></div>
                                                <div id="ai2Argument"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mx-auto">
                                        <button class="btn btn-lg btn-grad w-100" id="judgeBtn" disabled
                                            onclick="judgeDebate()">
                                            Evaluate
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="judgeSection mt-3">
                        <div class="card p-3 hidden" id="judgeContent">
                            <div class="card-header judge-header-bg text-white">Judgement <span
                                    class="badge bg-primary">OpenAI</span></div>
                            <div class="card-body">
                                <p id="judgeText"></p>
                            </div>
                        </div>
                    </section>
                    <div class="modal" id="modal">
                        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                            <div class="modal-content">
                                <div class="modal-body">
                                    <div class="card border-primary border shadow-none">
                                        <div class="card-body position-relative pt-4">
                                            <div class="my-3 pt-3 text-center">
                                                <img src="https://cdn.iconscout.com/icon/free/png-512/free-winner-icon-download-in-svg-png-gif-file-formats--trophy-cup-prize-creative-pack-miscellaneous-icons-29309.png"
                                                    alt="Standard Image" height="180">
                                            </div>
                                            <h4 class="card-title text-center text-capitalize mb-2 fs-5">Judgement <span
                                                    class="badge bg-primary">OpenAI</span></h4>
                                            <div class="loader" id="judge-loader"></div>
                                            <p id="judgeMessage" class="labelText mb-5"></p>
                                            <div class="d-flex gap-2">
                                                <button
                                                    class="btn btn-primary btn-sm d-grid waves-effect waves-light"
                                                    data-bs-dismiss="modal" onclick="closeModal()">Close</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3">
                    <div class="card p-1">
                        <div class="card-header">
                            <span>Events</span>
                        </div>
                        <div class="card-body p-3">
                            <ul id="eventList"></ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `);
 let SUPPORTER_AI = {
            model: "",
            apiKey: "",
        };
        let OPPOSER_AI = {
            model: "",
            apiKey: "",
        };
        const JUDGE_AI = {
            model: "",
            apiKey: "",
        };

        document.addEventListener("DOMContentLoaded", () => {
            const head = document.head || document.getElementsByTagName("head")[0];
            const linkTag = `<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">`;
            head.insertAdjacentHTML("beforeend", linkTag);
        });

        let userPrompt;

        function perform() {
            userPrompt = document.getElementById("debateInput").value;
            const ai1Argument = document.getElementById("ai1Argument");
            const ai2Argument = document.getElementById("ai2Argument");

            const message = document.getElementById("message");
            if (!userPrompt) {
                message.innerText = "Please provide a debate topic.";
                message.classList.remove("hidden");
                return;
            } else {
                message.classList.add("hidden");
            }

            // Start
            if (SUPPORTER_AI.model === "cohere") {
                addEvent("Running Supportive Arguments - Cohere AI in Action");
                document.getElementById("AI1-loader").style.display = "block";
                document.getElementById('ai1Argument').innerHTML = ''
                callCohere(
                    `(atleast 100 words & with space after each point) Pros for this topic in 3 sentences [number list]: "${userPrompt}"`,
                    SUPPORTER_AI.apiKey
                )
                    .then((res) => {
                        if (res.message && res.message.content) {
                            ai1Argument.innerText = res.message.content[0].text;

                            // start counterpoints
                            document.getElementById("AI2-loader").style.display = "block";
                            addEvent("Running Opposing Arguments - Powered by Google's Gemini");
                            document.getElementById('ai2Argument').innerHTML = ''
                            callGemini(
                                `(atleast 100 words & with space after each point) Counterpart each argument points in 3 single line generated by Cohere AI: "${res.message.content[0].text}`,
                                OPPOSER_AI.apiKey
                            )
                                .then((RGem) => {
                                    if (RGem.candidates && RGem.candidates.length > 0) {
                                        const canditate = RGem.candidates[0];
                                        if (canditate.content && canditate.content.parts) {
                                            ai2Argument.innerText = canditate.content.parts[0].text;
                                            document.getElementById('judgeBtn').disabled = false;
                                        }
                                    }
                                })
                                .catch((err) => console.error(err))
                                .finally(() => {
                                    document.getElementById("AI2-loader").style.display = "none";
                                });
                        }
                    })
                    .catch((err) => console.error(err))
                    .finally(() => {
                        document.getElementById("AI1-loader").style.display = "none";
                    });
            } else {
                document.getElementById("AI1-loader").style.display = "block";
                addEvent("Running Supportive Arguments - Google's Gemini in Action");
                document.getElementById('ai1Argument').innerHTML = ''
                callGemini(
                    ` (atleast 100 words & with space after each point) Pros for this topic in 3 sentences [number list]: "${userPrompt}`,
                    SUPPORTER_AI.apiKey
                )
                    .then((RGem) => {
                        if (RGem.candidates && RGem.candidates.length > 0) {
                            const canditate = RGem.candidates[0];
                            if (canditate.content && canditate.content.parts) {
                                ai1Argument.innerText = canditate.content.parts[0].text;

                                // start counterpoints
                                document.getElementById("AI2-loader").style.display = "block";
                                addEvent("Running Opposing Arguments - Powered by Cohere AI");
                                document.getElementById('ai2Argument').innerHTML = ''
                                callCohere(
                                    `(atleast 100 words & with space after each point) Counterpart each argument points in 3 single line generated by Gemini AI : "${canditate.content.parts[0].text}"`,
                                    OPPOSER_AI.apiKey
                                )
                                    .then((res) => {
                                        if (res.message && res.message.content) {
                                            ai2Argument.innerText = res.message.content[0].text;
                                            document.getElementById('judgeBtn').disabled = false;
                                        }
                                    })
                                    .catch((err) => console.error(err))
                                    .finally(() => {
                                        document.getElementById("AI2-loader").style.display = "none";
                                    });
                            }
                        }
                    })
                    .catch((err) => console.error(err))
                    .finally(() => {
                        document.getElementById("AI1-loader").style.display = "none";
                    });
            }
        }

        function startDebate(e) {
            e.preventDefault();
            perform();
        }

        function judgeDebate(e) {
            const myModal = new bootstrap.Modal(document.getElementById('modal'));
            myModal.show();

            // judge
            const support = document.getElementById("ai1Argument").innerText;
            const opposer = document.getElementById("ai2Argument").innerText;
            // document.getElementById("debateSection").classList.add("hidden");
            // document.getElementById('judgeSection').classList.remove("hidden");
            document.getElementById("judge-loader").style.display = "block";
            addEvent("Judge is validating the arguments");
            document.getElementById('judgeMessage').innerHTML = ''
            callOpenAI(`You are a Judge. The debate topic is: "Artificial Intelligence".
                        The models are Google & Cohere. Please provide a points based on the arguments.
                         Cohere Points: ${support}
                         Google Gemini Points: ${opposer}
                         Please announce the winner in one sentence and highlight the model in HTML <b> tag
                 To judge an AI debate, you can use the following criteria:
	             1.	Logical Coherence
	             •	Are the arguments logically sound and consistent?
	             2.	Relevance
	             •	Do the AI responses stay on topic and address the debate resolution?
	             3.	Evidence and Support
	             •	Does the AI provide credible data, examples, or sources to back its claims?
	             4.	Clarity
	             •	Are the arguments and responses easy to understand and well-articulated?
                 5   Ethical Consideration:
                     Are the arguments free of bias, misinformation, or unethical reasoning?
                     Overall marks should be for 10
                     Each criteria 2 marks
                     I need this in HTML Bordered table and with feedback.
                            `)
                .then(
                    (Res) => {
                        if (Res.choices) {
                            document.getElementById('judgeMessage').innerHTML = Res.choices[0].message.content
                        }
                    }
                ).finally(() => {
                    addEvent("Judgement given.");
                    document.getElementById("judge-loader").style.display = "none";
                })
        }

        async function callOpenAI(prompt, model = "gpt-4") {
            const apiUrl = "https://api.openai.com/v1/chat/completions";

            const payload = {
                model: model,
                messages: [{ role: "user", content: prompt }],
            };

            try {
                const response = await fetch(apiUrl, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${JUDGE_AI.apiKey.trim()}`,
                    },
                    body: JSON.stringify(payload),
                });

                if (response.status === 401) {
                    throw new Error('Unauthorized: Please Check Your OpenAI API Key.');
                }

                if (!response.ok) {
                    throw new Error(`OpenAI API error: ${response.statusText}`);
                }

                const data = await response.json();
                return data;
            } catch (error) {
                console.error("Error calling OpenAI API:", error);
                message.innerText = "Something went wrong while Judging";
                message.classList.remove("hidden");
            }
        }

        async function callCohere(prompt, apiKey) {
            const apiUrl = "https://api.cohere.com/v2/chat";

            const payload = {
                model: "command-r-plus-08-2024",
                messages: [
                    {
                        role: "user",
                        content: prompt,
                    },
                ],
            };

            try {
                const response = await fetch(apiUrl, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${apiKey.trim()}`,
                    },
                    body: JSON.stringify(payload),
                });

                if (response.status === 401) {
                    throw new Error('Unauthorized: Please Check Your Cohere AI API Key.');
                }
                const result = await response.json();
                return result;
            } catch (error) {
                console.error(error);
                message.innerText = error;
                message.classList.remove("hidden");
                return;
            }
        }

        async function callGemini(prompt, apiKey) {
            const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey.trim()}`;

            const payload = {
                contents: [
                    {
                        parts: [{ text: prompt }],
                    },
                ],
            };

            try {
                const response = await fetch(apiUrl, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(payload),
                });

                if (response.status === 401 || response.status === 400) {
                    throw new Error("Unauthorized: Please Check Your Google Gemini AI API Key.");
                }
                const result = await response.json();
                return result;
            } catch (error) {
                console.error(error);
                message.innerText = error;
                addEvent('Halting Debate: Invalid API Key Detected"')
                message.classList.remove("hidden");
                return;
            }
        }

        // Key Form JS
        function selectSupporterAI() {
            const selectedValue = document.querySelector(
                'input[name="supporterAI"]:checked'
            )?.value;

            const container = document.getElementById("opposerAI-container");
            container.classList.remove("hidden");
            if (selectedValue === "gemini") {
                OPPOSER_AI.model = "cohere";
                document.getElementById("opposerAi").innerText = "Cohere AI";
            } else {
                document.getElementById("opposerAi").innerText = "Google Gemini";
                OPPOSER_AI.model = "gemini";
            }

            /* setting API_KEY vale */
            if (!SUPPORTER_AI.apiKey) {
                SUPPORTER_AI.model = selectedValue;
                SUPPORTER_AI.apiKey = document.getElementById("sAPIKeyInput").value;
                addEvent("Supporter AI Model API Key Added Successfully");
            }
        }

        function selectOpposerAI() {
            document.getElementById("sAPIKeyBtn").disabled = true;

            /* enable Judge AI container*/
            const container = document.getElementById("judgeAI-container");
            container.classList.remove("hidden");

            /* setting API_KEY vale */
            if (!OPPOSER_AI.apiKey) {
                OPPOSER_AI.apiKey = document.getElementById("oAPIKeyInput").value;
                addEvent("Opposer AI Model API Key Added Successfully");
            }
        }

        function selectJudgeAI() {
            document.getElementById("sAPIKeyBtn").disabled = true;
            document.getElementById("oAPIKeyBtn").disabled = true;

            /* setting API_KEY vale */
            if (!JUDGE_AI.apiKey) {
                JUDGE_AI.model = "OPENAI-GPT";
                JUDGE_AI.apiKey = document.getElementById("jAPIKeyInput").value;
                addEvent("Evaluator AI Model API Key Added Successfully");
            }

            if (SUPPORTER_AI.apiKey && OPPOSER_AI.apiKey && JUDGE_AI.apiKey) {
                const initForm = document.getElementById("initForm");
                initForm.classList.add("hidden");
                const debatePrompt = document.getElementById("debateSection");
                debatePrompt.classList.remove("hidden");
                document.getElementById('supporterLabel').innerText = SUPPORTER_AI.model
                document.getElementById('opposerLabel').innerText = OPPOSER_AI.model
            }
        }

        function handleAIChange() {
            const sAPIKeyInput = document.getElementById("sAPIKeyInput");
            sAPIKeyInput.disabled = false;
            // reset others
            const container = document.getElementById("opposerAI-container");
            container.classList.add("hidden");
            const judgeContainer = document.getElementById("judgeAI-container");
            container.classList.add("hidden");
            judgeContainer.classList.add("hidden");
            document.getElementById("opposerAi").innerText = "";
            document.getElementById("sAPIKeyInput").value = "";
            document.getElementById("oAPIKeyInput").value = "";
            document.getElementById("jAPIKeyInput").value = "";
            document.getElementById("sAPIKeyBtn").disabled = true;

            JUDGE_AI.apiKey = "";
            OPPOSER_AI.apiKey = "";
            SUPPORTER_AI.apiKey = "";
            JUDGE_AI.model = "";
            OPPOSER_AI.model = "";
            SUPPORTER_AI.model = "";
            const eventList = document.getElementById("eventList");
            eventList.innerHTML = "";
        }

        function handleJAPIKeyInputChange() {
            const input = document.getElementById("jAPIKeyInput");
            const btn = document.getElementById("jAPIKeyBtn");
            if (input.value.trim() !== "") {
                btn.disabled = false;
            } else {
                btn.disabled = true;
            }
        }

        function handleSAPIKeyInputChange() {
            const input = document.getElementById("sAPIKeyInput");
            const btn = document.getElementById("sAPIKeyBtn");
            if (input.value.trim() !== "") {
                btn.disabled = false;
            } else {
                btn.disabled = true;
            }
        }

        function handleOAPIKeyInputChange() {
            const input = document.getElementById("oAPIKeyInput");
            const btn = document.getElementById("oAPIKeyBtn");
            if (input.value.trim() !== "") {
                btn.disabled = false;
            } else {
                btn.disabled = true;
            }
        }

        function addEvent(msg) {
            const eventList = document.getElementById("eventList");
            const li = document.createElement("li");
            li.textContent = msg;
            eventList.appendChild(li);
        }

        function newDabate() {
            document.getElementById('keySection').classList.remove('hidden')
            document.getElementById('debateSection').classList.add('hidden')
            document.getElementById('judgeSection').classList.add('hidden')
            document.getElementById("sAPIKeyInput").value = "";
            document.getElementById("oAPIKeyInput").value = "";
            document.getElementById("jAPIKeyInput").value = "";
            JUDGE_AI.apiKey = "";
            OPPOSER_AI.apiKey = "";
            SUPPORTER_AI.apiKey = "";
            JUDGE_AI.model = "";
            OPPOSER_AI.model = "";
            SUPPORTER_AI.model = "";
            const eventList = document.getElementById("eventList");
            eventList.innerHTML = "";
        }

        function closeModal() {
            document.getElementById('judgeContent').classList.remove('hidden');
            document.getElementById('judgeText').innerHTML = document.getElementById('judgeMessage').innerHTML
        }

        function start() {
            document.getElementById('opening').classList.add('hidden');
            document.getElementById('debateContainer').classList.remove('hidden');
        }

        function changeAI() {
            const tempAPIKEY = SUPPORTER_AI;
            SUPPORTER_AI = OPPOSER_AI
            OPPOSER_AI = tempAPIKEY
            document.getElementById('supporterLabel').innerText = SUPPORTER_AI.model
            document.getElementById('opposerLabel').innerText = OPPOSER_AI.model
            addEvent('AI model switched')
            if (userPrompt) {
                addEvent('Debate Has Begun')
                perform()
            }
        }
