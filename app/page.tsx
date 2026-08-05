{/* Painel de confiança — Banner Fullscreen de fundo com efeito água (glassmorphism) */}
      <section className="relative min-h-[80vh] w-full overflow-hidden bg-ink py-16 md:py-24">
        {/* Imagem de fundo cobrindo tudo de ponta a ponta */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2000&q=80"
            alt="Curitiba"
            fill
            priority
            className="object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/70" />
        </div>

        {/* Conteúdo sobreposto */}
        <div className="relative z-10 w-full px-4 md:px-8">
          {/* items-start garante que o topo do bloco da esquerda e do bloco da direita comecem exatamente na mesma linha */}
          <div className="grid w-full items-start gap-6 lg:grid-cols-[1.2fr,1fr]">
            
            {/* Bloco de texto principal (Esquerda) */}
            <div className="flex flex-col justify-between rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur-xl shadow-2xl md:p-12">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-brand">
                  Trato Feito
                </p>
                <h3 className="mt-4 max-w-md font-display text-[28px] font-semibold text-white leading-tight md:text-[36px]">
                  Curadoria em vez de catálogo genérico.
                </h3>
                <p className="mt-4 max-w-md text-[15px] leading-relaxed text-white/80">
                  Trabalhamos só com empreendimentos novos, nas regiões mais
                  consolidadas e desejadas de Curitiba. Cada imóvel passa por
                  uma seleção antes de entrar no site.
                </p>
              </div>

              <div className="mt-10 flex gap-12 border-t border-white/15 pt-6">
                <div>
                  <p className="font-display text-[32px] font-bold text-white">8</p>
                  <p className="mt-1 text-[11px] font-medium uppercase tracking-wider text-white/60">
                    Regiões nobres
                  </p>
                </div>
                <div>
                  <p className="font-display text-[32px] font-bold text-white">100%</p>
                  <p className="mt-1 text-[11px] font-medium uppercase tracking-wider text-white/60">
                    Empreendimentos novos
                  </p>
                </div>
              </div>
            </div>

            {/* Cards da direita */}
            <div className="grid gap-6">
              {/* Padding padronizado p-8 md:p-12 para bater com o card da esquerda */}
              <div className="group rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur-xl shadow-2xl transition duration-300 hover:bg-white/20 hover:border-white/30 md:p-12">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/20 text-white backdrop-blur-md shadow-inner">
                  ✓
                </span>
                <h4 className="mt-5 font-display text-[20px] font-semibold text-white">
                  Curadoria criteriosa
                </h4>
                <p className="mt-2 text-[14px] leading-relaxed text-white/75">
                  Só entram no catálogo imóveis novos, de alto padrão, com
                  localização e construtora verificadas.
                </p>
              </div>

              <div className="group rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur-xl shadow-2xl transition duration-300 hover:bg-white/20 hover:border-white/30 md:p-12">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/20 text-white backdrop-blur-md shadow-inner">
                  →
                </span>
                <h4 className="mt-5 font-display text-[20px] font-semibold text-white">
                  Atendimento direto
                </h4>
                <p className="mt-2 text-[14px] leading-relaxed text-white/75">
                  Sem formulários longos: toda dúvida e visita são combinadas
                  direto com um consultor, pelo WhatsApp.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
