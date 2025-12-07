import { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { CollapsibleSection, TechnologyOption, GlossaryItem } from './components/SectionComponents';

const GenAiStack = () => {
  const [expandedCategories, setExpandedCategories] = useState({
    frontend: false,
    uiComponents: false,
    streamingLogic: false,
    apiLayer: false,
    deployment: false,
    agentOrchestration: false,
    llmInfra: false,
    storage: false,
    aiSdkCore: false
  });

  const [expandedPatterns, setExpandedPatterns] = useState(false);

  const [expandedGlossary, setExpandedGlossary] = useState(false);
  const [expandedRelationships, setExpandedRelationships] = useState(false);
  const [expandedCategorization, setExpandedCategorization] = useState(false);

  type CategoryKey = keyof typeof expandedCategories;

  const toggleCategory = (category: CategoryKey) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const togglePatterns = () => {
    setExpandedPatterns(prev => !prev);
  };

  const toggleGlossary = () => {
    setExpandedGlossary(prev => !prev);
  };

  const toggleRelationships = () => {
    setExpandedRelationships(prev => !prev);
  };

  const toggleCategorization = () => {
    setExpandedCategorization(prev => !prev);
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

  const glossaryItems = [
    {
      title: 'Amazon Bedrock',
      description: 'AWS\'s fully managed service providing API access to multiple foundation models (Claude, Llama, Titan, etc.) through a single interface. Think of it as the "AWS marketplace for AI models" - you get enterprise features like VPC integration, CloudWatch monitoring, and AWS IAM without managing infrastructure.',
      alternatives: [
        'OpenAI API - Direct API to GPT models (faster updates, simpler)',
        'Anthropic API - Direct Claude access (latest features first)',
        'Azure OpenAI Service - Microsoft\'s managed OpenAI (similar concept)',
        'Google Vertex AI - Google\'s equivalent (Gemini, PaLM models)',
        'Together.ai / Replicate - Multi-model API platforms'
      ],
      color: 'border-indigo-200 bg-indigo-50',
      titleColor: 'text-indigo-900'
    },
    {
      title: 'Bedrock Knowledge Bases',
      description: 'Fully managed RAG (Retrieval Augmented Generation) service that automatically chunks documents, creates embeddings, stores them in vector databases, and retrieves relevant context for queries. Connects to S3, handles the entire RAG pipeline without code.',
      alternatives: [
        'LlamaIndex - Open-source RAG framework (Python/TypeScript)',
        'LangChain Document Loaders + Vector Stores - DIY RAG pipeline',
        'Pinecone + custom chunking - Build your own RAG system',
        'Weaviate with modules - Vector DB with built-in RAG features',
        'Azure AI Search - Microsoft\'s managed RAG solution'
      ],
      color: 'border-teal-200 bg-teal-50',
      titleColor: 'text-teal-900'
    },
    {
      title: 'Bedrock Agents',
      description: 'Fully managed service to create AI agents that can reason, use tools, and execute multi-step workflows. You define Action Groups (tools) via OpenAPI schemas backed by Lambda functions, and Bedrock handles orchestration, memory, and execution. No code for agent logic - configuration-based approach.',
      alternatives: [
        'LangGraph - Build stateful agents with code (more control)',
        'AutoGPT / BabyAGI - Open-source autonomous agents',
        'Semantic Kernel (Microsoft) - .NET agent framework',
        'OpenAI Assistants API - Managed agents with tools and files',
        'CrewAI - Multi-agent orchestration framework'
      ],
      color: 'border-purple-200 bg-purple-50',
      titleColor: 'text-purple-900'
    },
    {
      title: 'Bedrock AgentCore',
      description: 'Infrastructure platform for running AI agents at scale. Unlike Bedrock Agents (configuration-based), AgentCore lets you bring your own agent code (Strands, LangGraph, CrewAI, etc.) and provides managed runtime, memory, authentication, monitoring, security policies, and evaluations. Think "Lambda for agents" - you write the logic, AWS handles infrastructure.',
      alternatives: [
        'LangSmith + LangServe - LangChain\'s deployment/monitoring platform',
        'Modal - Serverless platform for Python (can run agents)',
        'Replicate - Run ML models and agents serverlessly',
        'Azure AI Agent Service - Microsoft\'s equivalent (preview)',
        'DIY: Lambda/ECS + your own monitoring - Self-managed approach'
      ],
      color: 'border-red-200 bg-red-50',
      titleColor: 'text-red-900',
      badge: 'NEW 2024'
    },
    {
      title: 'Strands Agents',
      description: 'Open-source Python SDK from AWS for building AI agents using a model-driven approach. Simple decorator pattern (@tool) turns any function into an agent tool. Used in production by AWS services (Amazon Q, AWS Glue). Works with any LLM, supports MCP (Model Context Protocol) for tool discovery. Can deploy anywhere, optimized for AgentCore.',
      alternatives: [
        'LangGraph - More complex, graph-based agent workflows (TS/Python)',
        'CrewAI - Multi-agent systems with role-based design',
        'AutoGen (Microsoft) - Multi-agent conversation framework',
        'OpenAI Swarm - Experimental multi-agent orchestration',
        'Haystack Agents - Agent framework from deepset.ai'
      ],
      color: 'border-orange-200 bg-orange-50',
      titleColor: 'text-orange-900',
      badge: 'AWS Open Source'
    },
    {
      title: 'S3 Vectors',
      description: 'Native vector database functionality built directly into S3. Store and query vector embeddings without provisioning separate infrastructure - up to 90% cheaper than traditional vector databases. Sub-second queries, integrates with Bedrock Knowledge Bases. Optimized for cost over ultra-low latency.',
      alternatives: [
        'Pinecone - Dedicated vector DB (fastest, most expensive)',
        'Weaviate - Open-source vector DB with advanced features',
        'Qdrant - High-performance open-source vector search',
        'Chroma - Simple embedded vector DB for prototyping',
        'Milvus / Zilliz - Scalable open-source vector database',
        'pgvector (Postgres) - Vector extension for existing Postgres'
      ],
      color: 'border-green-200 bg-green-50',
      titleColor: 'text-green-900',
      badge: 'NEW 2024'
    },
    {
      title: 'Lambda vs ECS (for APIs)',
      description: 'Lambda: Serverless functions, pay per request, auto-scaling, 15min timeout, cold starts. ECS (Fargate): Containerized apps, always warm, no timeouts, pay for uptime. Both can run your Hono.js API - Lambda for sporadic traffic, ECS for consistent traffic.',
      alternatives: [
        'Google Cloud Run - Serverless containers (similar to Fargate)',
        'Azure Functions - Serverless equivalent to Lambda',
        'Vercel Edge Functions - Deploy APIs with frontend',
        'Cloudflare Workers - Edge compute (ultra-low latency)',
        'Railway / Render / Fly.io - Simple container hosting'
      ],
      color: 'border-blue-200 bg-blue-50',
      titleColor: 'text-blue-900'
    },
    {
      title: 'S3 + CloudFront (for SPAs)',
      description: 'S3: Object storage for hosting static files (your built React/Svelte app). CloudFront: Global CDN that caches and serves your S3 content from edge locations worldwide. Together they provide fast, scalable, cheap static site hosting.',
      alternatives: [
        'Vercel - Zero-config deployment for SPAs (easiest)',
        'Netlify - Similar to Vercel, great DX',
        'Cloudflare Pages - Free tier, very fast edge network',
        'GitHub Pages - Free, simple, limited features',
        'Azure Static Web Apps - Microsoft\'s equivalent'
      ],
      color: 'border-gray-200 bg-gray-50',
      titleColor: 'text-gray-900'
    },
    {
      title: 'Model Context Protocol (MCP)',
      description: 'Open standard from Anthropic that enables AI applications to connect to external data sources and tools through a standardized protocol. Think "USB-C for AI" - instead of building custom connectors for each data source, you build MCP servers that any MCP-compatible client can use. Provides tools (functions), resources (data), and prompts (templates) to LLMs. Built on JSON-RPC over stdio/HTTP.',
      alternatives: [
        'OpenAI Function Calling - Vendor-specific tool use',
        'LangChain Tools - Framework-specific tool abstraction',
        'ChatGPT Plugins - OpenAI\'s earlier attempt (deprecated)',
        'OpenAPI/Swagger - Similar standardization for REST APIs'
      ],
      color: 'border-cyan-200 bg-cyan-50',
      titleColor: 'text-cyan-900',
      badge: 'Protocol'
    },
    {
      title: 'Agent2Agent (A2A) Protocol',
      description: 'Open protocol for secure, interoperable AI agent communication and collaboration. Enables agents from different providers and platforms to work together seamlessly, share context, and coordinate complex multi-agent workflows. Built on cryptographic security primitives and standardized message formats.',
      alternatives: [
        'Custom API integrations - Point-to-point agent communication',
        'LangChain LCEL - Framework-specific agent orchestration',
        'CrewAI multi-agent - Python-specific agent collaboration',
        'AutoGen group chat - Microsoft\'s agent communication framework'
      ],
      color: 'border-fuchsia-200 bg-fuchsia-50',
      titleColor: 'text-fuchsia-900',
      badge: 'Protocol - NEW 2025'
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto p-6 bg-gray-50">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2 text-gray-800 text-center">
          AI Chat Application Stack
        </h1>
        <p className="text-gray-600 mb-4 text-center">
          Complete categorization of technologies and how they fit together
        </p>
      </div>

      {/* Technology Categorization */}
      <CollapsibleSection
        title="Technology Categorization"
        description="Complete breakdown of technology choices by category"
        isExpanded={expandedCategorization}
        onToggle={toggleCategorization}
      >
        <div className="px-6 pb-6">
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
                      <TechnologyOption
                        key={idx}
                        name={option.name}
                        pros={option.pros}
                        cons={option.cons}
                        when={option.when}
                      />
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </CollapsibleSection>

      {/* Common Architecture Patterns */}
      <CollapsibleSection
        title="Common Architecture Patterns"
        description="Pre-configured stacks for different use cases"
        isExpanded={expandedPatterns}
        onToggle={togglePatterns}
      >
        <div className="px-6 pb-6">
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
      </CollapsibleSection>

      {/* AWS Technology Glossary */}
      <CollapsibleSection
        title="AWS AI Technology Glossary"
        description="Demystifying AWS's AI services and their alternatives"
        isExpanded={expandedGlossary}
        onToggle={toggleGlossary}
      >
        <div className="px-6 pb-6">
          <div className="space-y-6">
            {glossaryItems.map((item, idx) => (
              <GlossaryItem
                key={idx}
                title={item.title}
                description={item.description}
                alternatives={item.alternatives}
                badge={item.badge}
                color={item.color}
                titleColor={item.titleColor}
              />
            ))}
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
      </CollapsibleSection>

      {/* Key Relationships */}
      <CollapsibleSection
        title="Key Relationships"
        isExpanded={expandedRelationships}
        onToggle={toggleRelationships}
      >
        <div className="px-6 pb-6">
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
      </CollapsibleSection>
    </div>
  );
};

export default GenAiStack;
