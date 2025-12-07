import { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

const GenAiStack = () => {
  const [expandedCategories, setExpandedCategories] = useState({
    frontend: true,
    uiComponents: true,
    streamingLogic: true,
    apiLayer: true,
    deployment: true,
    agentOrchestration: true,
    llmInfra: true,
    storage: true,
    aiSdkCore: true
  });

  type CategoryKey = keyof typeof expandedCategories;

  const toggleCategory = (category: CategoryKey) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const categories = [
    {
      id: 'frontend',
      name: '1. Frontend Framework',
      color: 'bg-blue-100 border-blue-300',
      description: 'Core UI framework for building the application',
      options: [
        {
          name: 'React (SPA)',
          pros: ['Largest ecosystem', 'Most libraries', 'Cloudscape support'],
          cons: ['Larger bundle', 'More boilerplate'],
          when: 'Best for AWS ecosystem with Cloudscape'
        },
        {
          name: 'Svelte (SPA)',
          pros: ['Smallest bundle', 'Less boilerplate', 'Reactive by default'],
          cons: ['Smaller ecosystem', 'Fewer UI libraries'],
          when: 'Best for performance, simplicity'
        },
        {
          name: 'SvelteKit (adapter-static)',
          pros: ['File-based routing', 'Good DX', 'Can add SSR later'],
          cons: ['Slightly heavier than plain Svelte'],
          when: 'If you know SvelteKit and want routing'
        }
      ]
    },
    {
      id: 'uiComponents',
      name: '2. LLM UI Components',
      color: 'bg-purple-100 border-purple-300',
      description: 'Visual chat components (how messages look)',
      options: [
        {
          name: 'AWS Cloudscape Chat',
          pros: ['AWS-native', 'Production-tested', 'Complete design system', 'AI-focused patterns'],
          cons: ['React only', 'Opinionated styling'],
          when: 'Using AWS, want native integration'
        },
        {
          name: 'assistant-ui',
          pros: ['Most popular (50k+ downloads)', 'Radix-style composable', 'Maximum customization', 'Y Combinator backed'],
          cons: ['More setup required'],
          when: 'Need maximum control and customization'
        },
        {
          name: 'NLUX',
          pros: ['Great docs', 'Pre-built adapters', 'Zero dependencies', 'Next.js RSC support'],
          cons: ['Less composable than assistant-ui'],
          when: 'Want quick setup with adapters'
        },
        {
          name: 'LlamaIndex Chat UI',
          pros: ['Built-in code/LaTeX/PDF support', 'Works with AI SDK', 'Document-focused'],
          cons: ['LlamaIndex-specific patterns'],
          when: 'Building document-heavy RAG apps'
        },
        {
          name: 'chatscope/chat-ui-kit',
          pros: ['9.5k+ stars', 'Mature', 'Not LLM-specific'],
          cons: ['Less AI-specific features'],
          when: 'General chat UI needs'
        },
        {
          name: 'Build Your Own',
          pros: ['Full control', 'No dependencies', 'Lightweight'],
          cons: ['More work upfront'],
          when: 'Simple UI, want complete control'
        }
      ]
    },
    {
      id: 'streamingLogic',
      name: '3. Streaming & State Management',
      color: 'bg-green-100 border-green-300',
      description: 'Handles streaming responses, message state, API communication',
      options: [
        {
          name: 'Vercel AI SDK UI',
          pros: ['useChat() hook', 'Handles streaming automatically', 'Optimistic updates', 'Error handling'],
          cons: ['Vercel-specific streaming format'],
          when: 'RECOMMENDED - saves 100+ lines of code'
        },
        {
          name: 'Manual Implementation',
          pros: ['Full control', 'No dependencies'],
          cons: ['~200 lines of streaming logic', 'Handle edge cases yourself'],
          when: 'Only if you have specific needs'
        }
      ]
    },
    {
      id: 'apiLayer',
      name: '4. API Framework',
      color: 'bg-yellow-100 border-yellow-300',
      description: 'Backend API to handle requests',
      options: [
        {
          name: 'Hono.js',
          pros: ['Fast & lightweight', 'Edge-ready', 'Great DX', 'Works on Lambda/ECS'],
          cons: ['Smaller ecosystem than Express'],
          when: 'Modern, clean API layer'
        },
        {
          name: 'Express.js',
          pros: ['Most popular', 'Huge ecosystem', 'Well-known'],
          cons: ['Older, heavier'],
          when: 'Team knows Express well'
        },
        {
          name: 'Next.js API Routes',
          pros: ['Integrated with frontend', 'Easy deployment to Vercel'],
          cons: ['Tied to Next.js', 'Not AWS-native'],
          when: 'Using Next.js frontend'
        }
      ]
    },
    {
      id: 'deployment',
      name: '5. API Deployment',
      color: 'bg-orange-100 border-orange-300',
      description: 'Where your API runs',
      options: [
        {
          name: 'AWS Lambda',
          pros: ['Serverless', 'Pay per request', 'Auto-scaling', 'Simple deployment'],
          cons: ['Cold starts', '15min timeout'],
          when: 'Sporadic traffic, cost optimization'
        },
        {
          name: 'AWS ECS (Fargate)',
          pros: ['Always warm', 'No timeouts', 'Long-running tasks', 'More control'],
          cons: ['Always running = higher cost', 'More complex'],
          when: 'Consistent traffic, need always-on'
        },
        {
          name: 'Lambda Function URLs',
          pros: ['Simplest setup', 'No API Gateway needed', 'HTTPS endpoint'],
          cons: ['Less features than API Gateway'],
          when: 'Simple, direct API access'
        }
      ]
    },
    {
      id: 'agentOrchestration',
      name: '6. Agent Orchestration (Optional)',
      color: 'bg-red-100 border-red-300',
      description: 'Multi-step reasoning, tool selection, complex workflows',
      required: false,
      options: [
        {
          name: 'No Agents (Direct Bedrock)',
          pros: ['Simplest', 'Direct control', 'Minimal complexity'],
          cons: ['Manual tool orchestration'],
          when: 'Simple Q&A, basic RAG'
        },
        {
          name: 'Bedrock AgentCore + Strands',
          pros: ['Fully managed', 'Built-in memory/auth/monitoring', 'Production-ready', 'Python'],
          cons: ['AWS-specific', 'Newer service'],
          when: 'Production agents on AWS'
        },
        {
          name: 'Bedrock AgentCore + LangGraph',
          pros: ['TypeScript/Python support', 'Flexible', 'Fully managed infrastructure'],
          cons: ['More complex than Strands'],
          when: 'Complex workflows, TypeScript preference'
        },
        {
          name: 'LangChain (DIY hosting)',
          pros: ['Mature ecosystem', 'Many integrations', 'Provider-agnostic'],
          cons: ['Heavier', 'You manage infrastructure'],
          when: 'Need specific LangChain features'
        },
        {
          name: 'Bedrock Agents (managed)',
          pros: ['Fully managed', 'No code infrastructure', 'AWS-native'],
          cons: ['Less flexible', 'OpenAPI schemas required'],
          when: 'Want fully managed, simple agents'
        }
      ]
    },
    {
      id: 'llmInfra',
      name: '7. LLM & AI Infrastructure',
      color: 'bg-indigo-100 border-indigo-300',
      description: 'The actual AI models and capabilities',
      options: [
        {
          name: 'Amazon Bedrock (Models)',
          pros: ['Claude, Llama, Titan, etc.', 'AWS-native', 'Enterprise features', 'No separate API keys'],
          cons: ['AWS-specific', 'Some latency vs direct API'],
          when: 'AWS ecosystem, enterprise needs'
        },
        {
          name: 'Bedrock Knowledge Bases (RAG)',
          pros: ['Fully managed RAG', 'Auto chunking/embedding', 'S3 Vectors integration'],
          cons: ['Less control over retrieval'],
          when: 'Standard RAG needs'
        },
        {
          name: 'Direct Provider APIs',
          pros: ['Lower latency', 'Latest features first', 'More control'],
          cons: ['Separate billing', 'Manage API keys'],
          when: 'Need latest features, multi-cloud'
        }
      ]
    },
    {
      id: 'storage',
      name: '8. Vector Storage & Documents',
      color: 'bg-teal-100 border-teal-300',
      description: 'Where embeddings and documents are stored',
      options: [
        {
          name: 'S3 Vectors',
          pros: ['Native S3 integration', '90% cheaper', 'Sub-second queries', 'New service'],
          cons: ['Optimized for less frequent queries'],
          when: 'Cost-effective RAG on AWS'
        },
        {
          name: 'OpenSearch Serverless',
          pros: ['High query throughput', 'Advanced search', 'Mature'],
          cons: ['More expensive', 'More complex'],
          when: 'High QPS, complex queries'
        },
        {
          name: 'Pinecone / Weaviate',
          pros: ['Specialized vector DBs', 'Great performance', 'Good tooling'],
          cons: ['Separate service/billing', 'Not AWS-native'],
          when: 'Need specific vector DB features'
        }
      ]
    },
    {
      id: 'aiSdkCore',
      name: '9. AI SDK Core (Backend)',
      color: 'bg-pink-100 border-pink-300',
      description: 'Unified interface to call AI providers from backend',
      options: [
        {
          name: 'Vercel AI SDK Core',
          pros: ['Provider-agnostic', 'streamText() helper', 'Works with AI SDK UI', 'Easy streaming'],
          cons: ['Vercel ecosystem'],
          when: 'Using AI SDK UI frontend'
        },
        {
          name: 'Direct AWS SDK',
          pros: ['No extra dependencies', 'Full control', 'AWS-native'],
          cons: ['More boilerplate', 'Manual streaming'],
          when: 'Want minimal dependencies'
        },
        {
          name: 'Direct Provider SDKs',
          pros: ['Official SDKs', 'Latest features', 'Provider-specific optimizations'],
          cons: ['Locked to provider', 'Different APIs per provider'],
          when: 'Single provider, need specific features'
        }
      ]
    }
  ];

  const architecturePatterns = [
    {
      name: 'Simple RAG (No Agents)',
      stack: [
        'React/Svelte + Cloudscape/assistant-ui',
        'AI SDK UI (useChat)',
        'Hono.js on Lambda',
        'AI SDK Core OR Direct Bedrock',
        'Bedrock Models + Knowledge Bases',
        'S3 Vectors'
      ],
      when: 'Simple Q&A over documents',
      complexity: 'Low'
    },
    {
      name: 'Production Agents (AWS-Native)',
      stack: [
        'React + Cloudscape Chat',
        'AI SDK UI (useChat)',
        'Hono.js on Lambda (thin layer)',
        'Bedrock AgentCore (managed infrastructure)',
        'Strands Agents OR LangGraph (your code)',
        'Bedrock Models + Knowledge Bases',
        'S3 Vectors'
      ],
      when: 'Multi-step reasoning, production scale',
      complexity: 'Medium'
    },
    {
      name: 'Custom Agent Infrastructure',
      stack: [
        'React/Svelte + any UI library',
        'AI SDK UI OR custom',
        'Hono.js on ECS',
        'LangChain (you manage everything)',
        'Any LLM provider',
        'Any vector DB'
      ],
      when: 'Need full control, multi-cloud',
      complexity: 'High'
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto p-6 bg-gray-50">
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h1 className="text-3xl font-bold mb-2 text-gray-800">
          AI Chat Application Stack
        </h1>
        <p className="text-gray-600 mb-4">
          Complete categorization of technologies and how they fit together
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
          <p className="text-sm text-gray-700">
            <strong>How to read this:</strong> Categories are ordered from frontend to backend.
            Each category shows available options with pros/cons and when to use them.
          </p>
        </div>

        {/* Categories */}
        <div className="space-y-4">
          {categories.map((category) => (
            <div
              key={category.id}
              className={`border-2 rounded-lg overflow-hidden ${category.color}`}
            >
              <div
                className="p-4 cursor-pointer flex items-center justify-between hover:opacity-80"
                onClick={() => toggleCategory(category.id as CategoryKey)}
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h2 className="text-xl font-bold text-gray-800">
                      {category.name}
                    </h2>
                    {category.required === false && (
                      <span className="px-2 py-1 bg-yellow-200 text-yellow-800 text-xs rounded-full font-semibold">
                        OPTIONAL
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 mt-1">
                    {category.description}
                  </p>
                </div>
                {expandedCategories[category.id as CategoryKey] ? (
                  <ChevronDown className="w-6 h-6 text-gray-600" />
                ) : (
                  <ChevronRight className="w-6 h-6 text-gray-600" />
                )}
              </div>

              {expandedCategories[category.id as CategoryKey] && (
                <div className="bg-white p-4 space-y-3">
                  {category.options.map((option, idx) => (
                    <div
                      key={idx}
                      className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                    >
                      <h3 className="font-bold text-lg text-gray-800 mb-2">
                        {option.name}
                      </h3>

                      <div className="grid md:grid-cols-2 gap-3 mb-2">
                        <div>
                          <p className="text-sm font-semibold text-green-700 mb-1">
                            ✓ Pros:
                          </p>
                          <ul className="text-sm text-gray-600 space-y-1">
                            {option.pros.map((pro, i) => (
                              <li key={i}>• {pro}</li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <p className="text-sm font-semibold text-red-700 mb-1">
                            ✗ Cons:
                          </p>
                          <ul className="text-sm text-gray-600 space-y-1">
                            {option.cons.map((con, i) => (
                              <li key={i}>• {con}</li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="bg-blue-50 rounded p-2 mt-2">
                        <p className="text-sm text-gray-700">
                          <strong className="text-blue-700">When to use:</strong>{' '}
                          {option.when}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Common Architecture Patterns */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Common Architecture Patterns
        </h2>
        <p className="text-gray-600 mb-6">
          Pre-configured stacks for different use cases
        </p>

        <div className="grid md:grid-cols-3 gap-4">
          {architecturePatterns.map((pattern, idx) => (
            <div
              key={idx}
              className="border-2 border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-lg text-gray-800">
                  {pattern.name}
                </h3>
                <span
                  className={`px-2 py-1 text-xs rounded-full font-semibold ${
                    pattern.complexity === 'Low'
                      ? 'bg-green-200 text-green-800'
                      : pattern.complexity === 'Medium'
                      ? 'bg-yellow-200 text-yellow-800'
                      : 'bg-red-200 text-red-800'
                  }`}
                >
                  {pattern.complexity}
                </span>
              </div>

              <div className="mb-3">
                <p className="text-sm font-semibold text-gray-700 mb-2">
                  Stack (Frontend → Backend):
                </p>
                <ol className="text-sm text-gray-600 space-y-1">
                  {pattern.stack.map((layer, i) => (
                    <li key={i} className="flex items-start">
                      <span className="font-mono text-blue-600 mr-2">
                        {i + 1}.
                      </span>
                      <span>{layer}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="bg-gray-50 rounded p-2">
                <p className="text-sm text-gray-700">
                  <strong>Best for:</strong> {pattern.when}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 bg-green-50 border-l-4 border-green-500 p-4">
          <p className="text-sm font-semibold text-green-800 mb-2">
            💡 Recommended Starting Point:
          </p>
          <p className="text-sm text-gray-700">
            For "not very complex chat agent with RAG" → Start with{' '}
            <strong>Simple RAG pattern</strong>. Add AgentCore later only if you
            need multi-step reasoning with tool selection.
          </p>
        </div>
      </div>

      {/* AWS Technology Glossary */}
      <div className="bg-white rounded-lg shadow-lg p-6 mt-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          AWS AI Technology Glossary
        </h2>
        <p className="text-gray-600 mb-6">
          Demystifying AWS's AI services and their alternatives
        </p>

        <div className="space-y-6">
          {/* Amazon Bedrock */}
          <div className="border-2 border-indigo-200 rounded-lg p-4 bg-indigo-50">
            <h3 className="font-bold text-xl text-indigo-900 mb-2">
              Amazon Bedrock
            </h3>
            <p className="text-sm text-gray-700 mb-3">
              AWS's fully managed service providing API access to multiple foundation models (Claude, Llama, Titan, etc.) through a single interface. Think of it as the "AWS marketplace for AI models" - you get enterprise features like VPC integration, CloudWatch monitoring, and AWS IAM without managing infrastructure.
            </p>
            <div className="bg-white rounded p-3">
              <p className="text-sm font-semibold text-gray-700 mb-2">
                Competitive Alternatives:
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• <strong>OpenAI API</strong> - Direct API to GPT models (faster updates, simpler)</li>
                <li>• <strong>Anthropic API</strong> - Direct Claude access (latest features first)</li>
                <li>• <strong>Azure OpenAI Service</strong> - Microsoft's managed OpenAI (similar concept)</li>
                <li>• <strong>Google Vertex AI</strong> - Google's equivalent (Gemini, PaLM models)</li>
                <li>• <strong>Together.ai / Replicate</strong> - Multi-model API platforms</li>
              </ul>
            </div>
          </div>

          {/* Bedrock Knowledge Bases */}
          <div className="border-2 border-teal-200 rounded-lg p-4 bg-teal-50">
            <h3 className="font-bold text-xl text-teal-900 mb-2">
              Bedrock Knowledge Bases
            </h3>
            <p className="text-sm text-gray-700 mb-3">
              Fully managed RAG (Retrieval Augmented Generation) service that automatically chunks documents, creates embeddings, stores them in vector databases, and retrieves relevant context for queries. Connects to S3, handles the entire RAG pipeline without code.
            </p>
            <div className="bg-white rounded p-3">
              <p className="text-sm font-semibold text-gray-700 mb-2">
                Competitive Alternatives:
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• <strong>LlamaIndex</strong> - Open-source RAG framework (Python/TypeScript)</li>
                <li>• <strong>LangChain Document Loaders + Vector Stores</strong> - DIY RAG pipeline</li>
                <li>• <strong>Pinecone + custom chunking</strong> - Build your own RAG system</li>
                <li>• <strong>Weaviate with modules</strong> - Vector DB with built-in RAG features</li>
                <li>• <strong>Azure AI Search</strong> - Microsoft's managed RAG solution</li>
              </ul>
            </div>
          </div>

          {/* Bedrock Agents */}
          <div className="border-2 border-purple-200 rounded-lg p-4 bg-purple-50">
            <h3 className="font-bold text-xl text-purple-900 mb-2">
              Bedrock Agents
            </h3>
            <p className="text-sm text-gray-700 mb-3">
              Fully managed service to create AI agents that can reason, use tools, and execute multi-step workflows. You define Action Groups (tools) via OpenAPI schemas backed by Lambda functions, and Bedrock handles orchestration, memory, and execution. No code for agent logic - configuration-based approach.
            </p>
            <div className="bg-white rounded p-3">
              <p className="text-sm font-semibold text-gray-700 mb-2">
                Competitive Alternatives:
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• <strong>LangGraph</strong> - Build stateful agents with code (more control)</li>
                <li>• <strong>AutoGPT / BabyAGI</strong> - Open-source autonomous agents</li>
                <li>• <strong>Semantic Kernel (Microsoft)</strong> - .NET agent framework</li>
                <li>• <strong>OpenAI Assistants API</strong> - Managed agents with tools and files</li>
                <li>• <strong>CrewAI</strong> - Multi-agent orchestration framework</li>
              </ul>
            </div>
          </div>

          {/* Bedrock AgentCore */}
          <div className="border-2 border-red-200 rounded-lg p-4 bg-red-50">
            <h3 className="font-bold text-xl text-red-900 mb-2">
              Bedrock AgentCore <span className="text-sm bg-red-200 px-2 py-1 rounded">NEW 2024</span>
            </h3>
            <p className="text-sm text-gray-700 mb-3">
              Infrastructure platform for running AI agents at scale. Unlike Bedrock Agents (configuration-based), AgentCore lets you bring your own agent code (Strands, LangGraph, CrewAI, etc.) and provides managed runtime, memory, authentication, monitoring, security policies, and evaluations. Think "Lambda for agents" - you write the logic, AWS handles infrastructure.
            </p>
            <div className="bg-white rounded p-3">
              <p className="text-sm font-semibold text-gray-700 mb-2">
                Competitive Alternatives:
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• <strong>LangSmith + LangServe</strong> - LangChain's deployment/monitoring platform</li>
                <li>• <strong>Modal</strong> - Serverless platform for Python (can run agents)</li>
                <li>• <strong>Replicate</strong> - Run ML models and agents serverlessly</li>
                <li>• <strong>Azure AI Agent Service</strong> - Microsoft's equivalent (preview)</li>
                <li>• <strong>DIY: Lambda/ECS + your own monitoring</strong> - Self-managed approach</li>
              </ul>
            </div>
          </div>

          {/* Strands Agents */}
          <div className="border-2 border-orange-200 rounded-lg p-4 bg-orange-50">
            <h3 className="font-bold text-xl text-orange-900 mb-2">
              Strands Agents <span className="text-sm bg-orange-200 px-2 py-1 rounded">AWS Open Source</span>
            </h3>
            <p className="text-sm text-gray-700 mb-3">
              Open-source Python SDK from AWS for building AI agents using a model-driven approach. Simple decorator pattern (@tool) turns any function into an agent tool. Used in production by AWS services (Amazon Q, AWS Glue). Works with any LLM, supports MCP (Model Context Protocol) for tool discovery. Can deploy anywhere, optimized for AgentCore.
            </p>
            <div className="bg-white rounded p-3">
              <p className="text-sm font-semibold text-gray-700 mb-2">
                Competitive Alternatives:
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• <strong>LangGraph</strong> - More complex, graph-based agent workflows (TS/Python)</li>
                <li>• <strong>CrewAI</strong> - Multi-agent systems with role-based design</li>
                <li>• <strong>AutoGen (Microsoft)</strong> - Multi-agent conversation framework</li>
                <li>• <strong>OpenAI Swarm</strong> - Experimental multi-agent orchestration</li>
                <li>• <strong>Haystack Agents</strong> - Agent framework from deepset.ai</li>
              </ul>
            </div>
          </div>

          {/* S3 Vectors */}
          <div className="border-2 border-green-200 rounded-lg p-4 bg-green-50">
            <h3 className="font-bold text-xl text-green-900 mb-2">
              S3 Vectors <span className="text-sm bg-green-200 px-2 py-1 rounded">NEW 2024</span>
            </h3>
            <p className="text-sm text-gray-700 mb-3">
              Native vector database functionality built directly into S3. Store and query vector embeddings without provisioning separate infrastructure - up to 90% cheaper than traditional vector databases. Sub-second queries, integrates with Bedrock Knowledge Bases. Optimized for cost over ultra-low latency.
            </p>
            <div className="bg-white rounded p-3">
              <p className="text-sm font-semibold text-gray-700 mb-2">
                Competitive Alternatives:
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• <strong>Pinecone</strong> - Dedicated vector DB (fastest, most expensive)</li>
                <li>• <strong>Weaviate</strong> - Open-source vector DB with advanced features</li>
                <li>• <strong>Qdrant</strong> - High-performance open-source vector search</li>
                <li>• <strong>Chroma</strong> - Simple embedded vector DB for prototyping</li>
                <li>• <strong>Milvus / Zilliz</strong> - Scalable open-source vector database</li>
                <li>• <strong>pgvector (Postgres)</strong> - Vector extension for existing Postgres</li>
              </ul>
            </div>
          </div>

          {/* AWS Lambda vs ECS */}
          <div className="border-2 border-blue-200 rounded-lg p-4 bg-blue-50">
            <h3 className="font-bold text-xl text-blue-900 mb-2">
              Lambda vs ECS (for APIs)
            </h3>
            <p className="text-sm text-gray-700 mb-3">
              <strong>Lambda:</strong> Serverless functions, pay per request, auto-scaling, 15min timeout, cold starts. <strong>ECS (Fargate):</strong> Containerized apps, always warm, no timeouts, pay for uptime. Both can run your Hono.js API - Lambda for sporadic traffic, ECS for consistent traffic.
            </p>
            <div className="bg-white rounded p-3">
              <p className="text-sm font-semibold text-gray-700 mb-2">
                Competitive Alternatives:
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• <strong>Google Cloud Run</strong> - Serverless containers (similar to Fargate)</li>
                <li>• <strong>Azure Functions</strong> - Serverless equivalent to Lambda</li>
                <li>• <strong>Vercel Edge Functions</strong> - Deploy APIs with frontend</li>
                <li>• <strong>Cloudflare Workers</strong> - Edge compute (ultra-low latency)</li>
                <li>• <strong>Railway / Render / Fly.io</strong> - Simple container hosting</li>
              </ul>
            </div>
          </div>

          {/* CloudFront + S3 */}
          <div className="border-2 border-gray-200 rounded-lg p-4 bg-gray-50">
            <h3 className="font-bold text-xl text-gray-900 mb-2">
              S3 + CloudFront (for SPAs)
            </h3>
            <p className="text-sm text-gray-700 mb-3">
              <strong>S3:</strong> Object storage for hosting static files (your built React/Svelte app). <strong>CloudFront:</strong> Global CDN that caches and serves your S3 content from edge locations worldwide. Together they provide fast, scalable, cheap static site hosting.
            </p>
            <div className="bg-white rounded p-3">
              <p className="text-sm font-semibold text-gray-700 mb-2">
                Competitive Alternatives:
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• <strong>Vercel</strong> - Zero-config deployment for SPAs (easiest)</li>
                <li>• <strong>Netlify</strong> - Similar to Vercel, great DX</li>
                <li>• <strong>Cloudflare Pages</strong> - Free tier, very fast edge network</li>
                <li>• <strong>GitHub Pages</strong> - Free, simple, limited features</li>
                <li>• <strong>Azure Static Web Apps</strong> - Microsoft's equivalent</li>
              </ul>
            </div>
          </div>

          {/* Model Context Protocol */}
          <div className="border-2 border-cyan-200 rounded-lg p-4 bg-cyan-50">
            <h3 className="font-bold text-xl text-cyan-900 mb-2">
              Model Context Protocol (MCP) <span className="text-sm bg-cyan-200 px-2 py-1 rounded">Protocol</span>
            </h3>
            <p className="text-sm text-gray-700 mb-3">
              Open standard from Anthropic that enables AI applications to connect to external data sources and tools through a standardized protocol. Think "USB-C for AI" - instead of building custom connectors for each data source, you build MCP servers that any MCP-compatible client can use. Provides tools (functions), resources (data), and prompts (templates) to LLMs. Built on JSON-RPC over stdio/HTTP.
            </p>
            <div className="bg-white rounded p-3">
              <p className="text-sm font-semibold text-gray-700 mb-2">
                What MCP Does:
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-3">
                <li>• <strong>Agent → Tool</strong> communication (give agents access to databases, APIs, files)</li>
                <li>• Pre-built servers: Google Drive, Slack, GitHub, Postgres, Puppeteer</li>
                <li>• SDKs: Python, TypeScript, Java, C#, Kotlin</li>
                <li>• Adopted by Claude, ChatGPT, VS Code, Zed, Replit, Sourcegraph</li>
              </ul>
              <p className="text-sm font-semibold text-gray-700 mb-2">
                Similar Concepts:
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• <strong>OpenAI Function Calling</strong> - Vendor-specific tool use</li>
                <li>• <strong>LangChain Tools</strong> - Framework-specific tool abstraction</li>
                <li>• <strong>ChatGPT Plugins</strong> - OpenAI's earlier attempt (deprecated)</li>
                <li>• <strong>OpenAPI/Swagger</strong> - Similar standardization for REST APIs</li>
              </ul>
            </div>
          </div>

          {/* Agent2Agent Protocol */}
          <div className="border-2 border-fuchsia-200 rounded-lg p-4 bg-fuchsia-50">
            <h3 className="font-bold text-xl text-fuchsia-900 mb-2">
              Agent2Agent (A2A) Protocol <span className="text-sm bg-fuchsia-200 px-2 py-1 rounded">Protocol - NEW 2025</span>
            </h3>
            <p className="text-sm text-gray-700 mb-3">
              Open standard from Google (now at Linux Foundation) that enables AI agents to communicate and collaborate with other AI agents across different frameworks and vendors. While MCP connects agents to tools/data, A2A connects agents to agents. Agents can discover each other's capabilities, delegate tasks, exchange information, and coordinate without sharing internal state or memory. Built on HTTP, SSE, JSON-RPC.
            </p>
            <div className="bg-white rounded p-3">
              <p className="text-sm font-semibold text-gray-700 mb-2">
                What A2A Does:
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-3">
                <li>• <strong>Agent → Agent</strong> communication (multi-agent collaboration)</li>
                <li>• Agent Cards: agents advertise capabilities at well-known URLs</li>
                <li>• Task delegation: agents can delegate subtasks to specialized agents</li>
                <li>• 100+ partners: Google, Microsoft, AWS, Salesforce, ServiceNow, SAP, Atlassian</li>
                <li>• Works with any framework: LangGraph, CrewAI, Strands, Semantic Kernel, ADK</li>
              </ul>
              <p className="text-sm font-semibold text-gray-700 mb-2">
                Key Principle:
              </p>
              <p className="text-sm text-gray-600 mb-2">
                <strong>MCP for tools, A2A for agents.</strong> Use MCP to give one agent capabilities. Use A2A when agents need to work together. Both protocols are complementary - agentic apps need both.
              </p>
              <p className="text-sm font-semibold text-gray-700 mb-2">
                Similar Concepts:
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• <strong>Multi-agent frameworks</strong> (CrewAI, AutoGen) - but proprietary</li>
                <li>• <strong>Microservices communication</strong> - similar pattern for services</li>
                <li>• <strong>RPC protocols</strong> - A2A is RPC specifically for agents</li>
                <li>• Nothing else quite like it - A2A is pioneering agent interoperability</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-500 p-4">
          <p className="text-sm font-semibold text-yellow-800 mb-2">
            📝 Quick Decision Guide:
          </p>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>• <strong>Just need AI models?</strong> → Bedrock (or direct OpenAI/Anthropic API)</li>
            <li>• <strong>Need RAG?</strong> → Bedrock Knowledge Bases (or LlamaIndex)</li>
            <li>• <strong>Need agents with config?</strong> → Bedrock Agents</li>
            <li>• <strong>Need agents with code control?</strong> → AgentCore + Strands (or LangGraph)</li>
            <li>• <strong>Need vector storage?</strong> → S3 Vectors (or Pinecone for high QPS)</li>
            <li>• <strong>Want AWS-native everything?</strong> → Use all AWS services above</li>
            <li>• <strong>Want provider-agnostic?</strong> → Use open-source alternatives</li>
          </ul>
        </div>

        <div className="mt-6 bg-cyan-50 border-l-4 border-cyan-500 p-4">
          <p className="text-sm font-semibold text-cyan-800 mb-2">
            🔌 Understanding MCP vs A2A:
          </p>
          <div className="text-sm text-gray-700 space-y-2">
            <p><strong>MCP (Model Context Protocol):</strong> Agent-to-Tool communication</p>
            <ul className="ml-4 space-y-1">
              <li>• "Give my agent access to Google Drive, Slack, databases"</li>
              <li>• One agent, many tools</li>
              <li>• Like plugins for your agent</li>
            </ul>
            <p className="mt-2"><strong>A2A (Agent2Agent Protocol):</strong> Agent-to-Agent communication</p>
            <ul className="ml-4 space-y-1">
              <li>• "Let my HR agent talk to recruiting agent and background check agent"</li>
              <li>• Many agents, coordinated workflow</li>
              <li>• Like microservices for agents</li>
            </ul>
            <p className="mt-2"><strong>Example:</strong> HR agent uses <em>MCP</em> to access ATS database, then uses <em>A2A</em> to delegate candidate screening to recruiting agent, which itself uses <em>MCP</em> to access LinkedIn data.</p>
          </div>
        </div>
      </div>

      {/* Key Relationships */}
      <div className="bg-white rounded-lg shadow-lg p-6 mt-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Key Relationships
        </h2>

        <div className="space-y-4">
          <div className="border-l-4 border-purple-500 pl-4">
            <h3 className="font-bold text-gray-800 mb-1">
              UI Components vs Streaming Logic
            </h3>
            <p className="text-sm text-gray-600">
              <strong>UI Components</strong> (Cloudscape, assistant-ui) = How messages <em>look</em>
              <br />
              <strong>AI SDK UI</strong> (useChat) = How messages <em>behave</em> (streaming, state)
              <br />
              → <strong>Use BOTH together</strong>
            </p>
          </div>

          <div className="border-l-4 border-green-500 pl-4">
            <h3 className="font-bold text-gray-800 mb-1">
              When Do You Need Agents?
            </h3>
            <p className="text-sm text-gray-600">
              <strong>NO agents needed:</strong> Simple Q&A, single tool (just RAG)
              <br />
              <strong>YES agents needed:</strong> Multi-step reasoning, agent decides which tools to use
            </p>
          </div>

          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="font-bold text-gray-800 mb-1">
              AgentCore = Infrastructure for Agents
            </h3>
            <p className="text-sm text-gray-600">
              AgentCore provides: Runtime, Memory, Auth, Monitoring, Security, Evaluations
              <br />
              Your agent code (Strands/LangGraph) runs ON AgentCore
              <br />
              → Think: Lambda is to functions as AgentCore is to agents
            </p>
          </div>

          <div className="border-l-4 border-orange-500 pl-4">
            <h3 className="font-bold text-gray-800 mb-1">
              LangChain vs Direct Bedrock
            </h3>
            <p className="text-sm text-gray-600">
              <strong>Use LangChain if:</strong> Custom RAG logic, complex chains, provider flexibility
              <br />
              <strong>Use Direct Bedrock if:</strong> Simple RAG, Bedrock Knowledge Bases handle it
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenAiStack;
