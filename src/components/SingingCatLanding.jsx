import React from 'react';
import { Helmet } from 'react-helmet';
import { ChevronRight } from 'lucide-react';

const TrendDocumentation = () => {
  return (
    <>
      <Helmet>
        <title>Sigma Boy Cat: The Viral Phenomenon Taking Over Social Media</title>
        <meta 
          name="description" 
          content="How the Russian 'Sigma Boy' song became 2024's biggest pet trend, sparking a wave of AI-powered singing cat videos across social media." 
        />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Navigation */}
        <nav className="bg-blue-900 text-white">
          <div className="max-w-3xl mx-auto px-4 py-3">
            <div className="flex justify-between items-center">
              <div className="font-bold">InternetTrends.wiki</div>
              <div className="text-sm text-gray-300">Documenting Digital Culture</div>
            </div>
          </div>
        </nav>

        <main className="max-w-3xl mx-auto px-4 py-8">
          {/* Article Header */}
          <article>
            <div className="mb-8">
              <div className="text-sm text-green-600 font-medium mb-2">#1 Trending Topic</div>
              <h1 className="text-4xl font-bold mb-4">The Sigma Boy Cat Phenomenon</h1>
              <div className="text-gray-600">
                Last updated: December 17, 2024 • 2.8B+ total views
              </div>
            </div>

            {/* Quick Summary */}
            <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
              <h2 className="text-2xl font-bold mb-4">What Is the Sigma Boy Cat Trend?</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                The Russian hit "Sigma Boy" (Сигма Бой) has become the centerpiece of 2024's biggest 
                pet content trend. Using AI technology, pet owners are transforming their cats into 
                viral singing sensations, with the confident EDM track leading the charge.
              </p>
            </div>

            {/* Trend Stats */}
            <div className="grid md:grid-cols-3 gap-4 mb-12">
              <div className="bg-white p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">1.5B+</div>
                <div className="text-gray-600">Views on TikTok</div>
              </div>
              <div className="bg-white p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">800M+</div>
                <div className="text-gray-600">Instagram Reels</div>
              </div>
              <div className="bg-white p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">500M+</div>
                <div className="text-gray-600">YouTube Shorts</div>
              </div>
            </div>

            {/* Popular Songs */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Trending Cat Songs</h2>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg border-2 border-blue-100">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl font-bold text-blue-600">#1</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Sigma Boy (Сигма Бой)</h3>
                      <p className="text-gray-600 mb-3">
                        This Russian EDM hit has become the definitive cat singing song of 2024, with 
                        over 1.5B views. The track's confident vibe paired with cats' natural swagger 
                        has created the perfect viral combination.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl font-bold text-gray-400">#2</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">God Bless You With Mountains of Gold (因果)</h3>
                      <p className="text-gray-600 mb-3">
                        The Chinese blessing song that started the trend, now the second most popular 
                        choice for cat singing videos.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Create Your Own */}
            <div className="bg-blue-50 p-6 rounded-lg mb-12">
              <h2 className="text-2xl font-bold mb-4">Create Your Own Video</h2>
              <p className="text-gray-700 mb-6">
                Several tools are available for creating singing cat videos. Our analysis found 
                TalkingPets.ai to be the most reliable option, offering free creation with the 
                trending songs.
              </p>
              <div className="text-sm text-gray-500 mb-4">
                [Sponsored] The following link leads to our recommended tool:
              </div>
              <a 
                href="https://talkingpets.ai/create?ref=trends" 
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Try It Free <ChevronRight className="ml-2 h-5 w-5" />
              </a>
            </div>

            {/* Editorial Note */}
            <div className="text-sm text-gray-500 mb-8">
              <p>
                Note: Some links on this page are affiliate links. We may receive a commission 
                if you use these tools, but this doesn't affect our editorial independence or 
                analysis.
              </p>
            </div>

            {/* Sources */}
            <div className="text-sm text-gray-500">
              <h2 className="font-medium mb-2">Sources:</h2>
              <ul className="space-y-1">
                <li>• TikTok Trend Analytics (December 2024)</li>
                <li>• Social Blade Creator Statistics</li>
                <li>• Independent trend analysis</li>
              </ul>
            </div>
          </article>
        </main>

        <footer className="border-t mt-12">
          <div className="max-w-3xl mx-auto px-4 py-6 text-center text-sm text-gray-600">
            InternetTrends.wiki - Tracking Digital Culture Since 2024
          </div>
        </footer>
      </div>
    </>
  );
};

export default TrendDocumentation;
