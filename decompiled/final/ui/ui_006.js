/**
 * ╔════════════════════════════════════════════════════════════════╗
 * ║  Claude Code Decompiled - 完整逻辑还原版 v3.0                   ║
 * ╚════════════════════════════════════════════════════════════════╝
 *
 * 原始文件: ui_006.js
 * 处理时间: 2025-12-09T03:41:38.952Z
 * 变量映射: 1 个已识别变量
 *
 * 注意: 代码逻辑100%保留，仅添加变量名解释注释
 *
 * ===================== 变量索引 =====================
 * en       (  1x) AGENT_OUTPUT_TOOL = "AgentOutputTool"
 * ======================================================
 */

/**
 * Claude Code Decompiled
 * Category: ui
 * File: 6/53
 * Lines: 44818 - 46316 (1499 lines)
 * Original file: cli.js
 */

        return {
            name: "Stan",
            aliases: ["stanfuncs"],
            keywords: {
                $pattern: A.IDENT_RE,
                title: Q,
                keyword: B.concat(Z).concat(G),
                built_in: I
            },
            contains: [A.C_LINE_COMMENT_MODE, A.COMMENT(/#/, /$/, {
                relevance: 0,
                keywords: {
                    "meta-keyword": "include"
                }
            }), A.COMMENT(/\/\*/, /\*\//, {
                relevance: 0,
                contains: [{
                    className: "doctag",
                    begin: /@(return|param)/
                }]
            }), {
                begin: /<\s*lower\s*=/,
                keywords: "lower"
            }, {
                begin: /[<,]\s*upper\s*=/,
                keywords: "upper"
            }, {
                className: "keyword",
                begin: /\btarget\s*\+=/,
                relevance: 10
            }, {
                begin: "~\\s*(" + A.IDENT_RE + ")\\s*\\(",
                keywords: Y
            }, {
                className: "number",
                variants: [{
                    begin: /\b\d+(?:\.\d*)?(?:[eE][+-]?\d+)?/
                }, {
                    begin: /\.\d+(?:[eE][+-]?\d+)?\b/
                }],
                relevance: 0
            }, {
                className: "string",
                begin: '"',
                end: '"',
                relevance: 0
            }]
        }
    }
    $d0.exports = h44
});
var Nd0 = U((j87, qd0) => {
    function g44(A) {
        return {
            name: "Stata",
            aliases: ["do", "ado"],
            case_insensitive: !0,
            keywords: "if else in foreach for forv forva forval forvalu forvalue forvalues by bys bysort xi quietly qui capture about ac ac_7 acprplot acprplot_7 adjust ado adopath adoupdate alpha ameans an ano anov anova anova_estat anova_terms anovadef aorder ap app appe appen append arch arch_dr arch_estat arch_p archlm areg areg_p args arima arima_dr arima_estat arima_p as asmprobit asmprobit_estat asmprobit_lf asmprobit_mfx__dlg asmprobit_p ass asse asser assert avplot avplot_7 avplots avplots_7 bcskew0 bgodfrey bias binreg bip0_lf biplot bipp_lf bipr_lf bipr_p biprobit bitest bitesti bitowt blogit bmemsize boot bootsamp bootstrap bootstrap_8 boxco_l boxco_p boxcox boxcox_6 boxcox_p bprobit br break brier bro brow brows browse brr brrstat bs bs_7 bsampl_w bsample bsample_7 bsqreg bstat bstat_7 bstat_8 bstrap bstrap_7 bubble bubbleplot ca ca_estat ca_p cabiplot camat canon canon_8 canon_8_p canon_estat canon_p cap caprojection capt captu captur capture cat cc cchart cchart_7 cci cd censobs_table centile cf char chdir checkdlgfiles checkestimationsample checkhlpfiles checksum chelp ci cii cl class classutil clear cli clis clist clo clog clog_lf clog_p clogi clogi_sw clogit clogit_lf clogit_p clogitp clogl_sw cloglog clonevar clslistarray cluster cluster_measures cluster_stop cluster_tree cluster_tree_8 clustermat cmdlog cnr cnre cnreg cnreg_p cnreg_sw cnsreg codebook collaps4 collapse colormult_nb colormult_nw compare compress conf confi confir confirm conren cons const constr constra constrai constrain constraint continue contract copy copyright copysource cor corc corr corr2data corr_anti corr_kmo corr_smc corre correl correla correlat correlate corrgram cou coun count cox cox_p cox_sw coxbase coxhaz coxvar cprplot cprplot_7 crc cret cretu cretur creturn cross cs cscript cscript_log csi ct ct_is ctset ctst_5 ctst_st cttost cumsp cumsp_7 cumul cusum cusum_7 cutil d|0 datasig datasign datasigna datasignat datasignatu datasignatur datasignature datetof db dbeta de dec deco decod decode deff des desc descr descri describ describe destring dfbeta dfgls dfuller di di_g dir dirstats dis discard disp disp_res disp_s displ displa display distinct do doe doed doedi doedit dotplot dotplot_7 dprobit drawnorm drop ds ds_util dstdize duplicates durbina dwstat dydx e|0 ed edi edit egen eivreg emdef en enc enco encod encode eq erase ereg ereg_lf ereg_p ereg_sw ereghet ereghet_glf ereghet_glf_sh ereghet_gp ereghet_ilf ereghet_ilf_sh ereghet_ip eret eretu eretur ereturn err erro error esize est est_cfexist est_cfname est_clickable est_expand est_hold est_table est_unhold est_unholdok estat estat_default estat_summ estat_vce_only esti estimates etodow etof etomdy ex exi exit expand expandcl fac fact facto factor factor_estat factor_p factor_pca_rotated factor_rotate factormat fcast fcast_compute fcast_graph fdades fdadesc fdadescr fdadescri fdadescrib fdadescribe fdasav fdasave fdause fh_st file open file read file close file filefilter fillin find_hlp_file findfile findit findit_7 fit fl fli flis flist for5_0 forest forestplot form forma format fpredict frac_154 frac_adj frac_chk frac_cox frac_ddp frac_dis frac_dv frac_in frac_mun frac_pp frac_pq frac_pv frac_wgt frac_xo fracgen fracplot fracplot_7 fracpoly fracpred fron_ex fron_hn fron_p fron_tn fron_tn2 frontier ftodate ftoe ftomdy ftowdate funnel funnelplot g|0 gamhet_glf gamhet_gp gamhet_ilf gamhet_ip gamma gamma_d2 gamma_p gamma_sw gammahet gdi_hexagon gdi_spokes ge gen gene gener genera generat generate genrank genstd genvmean gettoken gl gladder gladder_7 glim_l01 glim_l02 glim_l03 glim_l04 glim_l05 glim_l06 glim_l07 glim_l08 glim_l09 glim_l10 glim_l11 glim_l12 glim_lf glim_mu glim_nw1 glim_nw2 glim_nw3 glim_p glim_v1 glim_v2 glim_v3 glim_v4 glim_v5 glim_v6 glim_v7 glm glm_6 glm_p glm_sw glmpred glo glob globa global glogit glogit_8 glogit_p gmeans gnbre_lf gnbreg gnbreg_5 gnbreg_p gomp_lf gompe_sw gomper_p gompertz gompertzhet gomphet_glf gomphet_glf_sh gomphet_gp gomphet_ilf gomphet_ilf_sh gomphet_ip gphdot gphpen gphprint gprefs gprobi_p gprobit gprobit_8 gr gr7 gr_copy gr_current gr_db gr_describe gr_dir gr_draw gr_draw_replay gr_drop gr_edit gr_editviewopts gr_example gr_example2 gr_export gr_print gr_qscheme gr_query gr_read gr_rename gr_replay gr_save gr_set gr_setscheme gr_table gr_undo gr_use graph graph7 grebar greigen greigen_7 greigen_8 grmeanby grmeanby_7 gs_fileinfo gs_filetype gs_graphinfo gs_stat gsort gwood h|0 hadimvo hareg hausman haver he heck_d2 heckma_p heckman heckp_lf heckpr_p heckprob hel help hereg hetpr_lf hetpr_p hetprob hettest hexdump hilite hist hist_7 histogram hlogit hlu hmeans hotel hotelling hprobit hreg hsearch icd9 icd9_ff icd9p iis impute imtest inbase include inf infi infil infile infix inp inpu input ins insheet insp inspe inspec inspect integ inten intreg intreg_7 intreg_p intrg2_ll intrg_ll intrg_ll2 ipolate iqreg ir irf irf_create irfm iri is_svy is_svysum isid istdize ivprob_1_lf ivprob_lf ivprobit ivprobit_p ivreg ivreg_footnote ivtob_1_lf ivtob_lf ivtobit ivtobit_p jackknife jacknife jknife jknife_6 jknife_8 jkstat joinby kalarma1 kap kap_3 kapmeier kappa kapwgt kdensity kdensity_7 keep ksm ksmirnov ktau kwallis l|0 la lab labbe labbeplot labe label labelbook ladder levels levelsof leverage lfit lfit_p li lincom line linktest lis list lloghet_glf lloghet_glf_sh lloghet_gp lloghet_ilf lloghet_ilf_sh lloghet_ip llogi_sw llogis_p llogist llogistic llogistichet lnorm_lf lnorm_sw lnorma_p lnormal lnormalhet lnormhet_glf lnormhet_glf_sh lnormhet_gp lnormhet_ilf lnormhet_ilf_sh lnormhet_ip lnskew0 loadingplot loc loca local log logi logis_lf logistic logistic_p logit logit_estat logit_p loglogs logrank loneway lookfor lookup lowess lowess_7 lpredict lrecomp lroc lroc_7 lrtest ls lsens lsens_7 lsens_x lstat ltable ltable_7 ltriang lv lvr2plot lvr2plot_7 m|0 ma mac macr macro makecns man manova manova_estat manova_p manovatest mantel mark markin markout marksample mat mat_capp mat_order mat_put_rr mat_rapp mata mata_clear mata_describe mata_drop mata_matdescribe mata_matsave mata_matuse mata_memory mata_mlib mata_mosave mata_rename mata_which matalabel matcproc matlist matname matr matri matrix matrix_input__dlg matstrik mcc mcci md0_ md1_ md1debug_ md2_ md2debug_ mds mds_estat mds_p mdsconfig mdslong mdsmat mdsshepard mdytoe mdytof me_derd mean means median memory memsize menl meqparse mer merg merge meta mfp mfx mhelp mhodds minbound mixed_ll mixed_ll_reparm mkassert mkdir mkmat mkspline ml ml_5 ml_adjs ml_bhhhs ml_c_d ml_check ml_clear ml_cnt ml_debug ml_defd ml_e0 ml_e0_bfgs ml_e0_cycle ml_e0_dfp ml_e0i ml_e1 ml_e1_bfgs ml_e1_bhhh ml_e1_cycle ml_e1_dfp ml_e2 ml_e2_cycle ml_ebfg0 ml_ebfr0 ml_ebfr1 ml_ebh0q ml_ebhh0 ml_ebhr0 ml_ebr0i ml_ecr0i ml_edfp0 ml_edfr0 ml_edfr1 ml_edr0i ml_eds ml_eer0i ml_egr0i ml_elf ml_elf_bfgs ml_elf_bhhh ml_elf_cycle ml_elf_dfp ml_elfi ml_elfs ml_enr0i ml_enrr0 ml_erdu0 ml_erdu0_bfgs ml_erdu0_bhhh ml_erdu0_bhhhq ml_erdu0_cycle ml_erdu0_dfp ml_erdu0_nrbfgs ml_exde ml_footnote ml_geqnr ml_grad0 ml_graph ml_hbhhh ml_hd0 ml_hold ml_init ml_inv ml_log ml_max ml_mlout ml_mlout_8 ml_model ml_nb0 ml_opt ml_p ml_plot ml_query ml_rdgrd ml_repor ml_s_e ml_score ml_searc ml_technique ml_unhold mleval mlf_ mlmatbysum mlmatsum mlog mlogi mlogit mlogit_footnote mlogit_p mlopts mlsum mlvecsum mnl0_ mor more mov move mprobit mprobit_lf mprobit_p mrdu0_ mrdu1_ mvdecode mvencode mvreg mvreg_estat n|0 nbreg nbreg_al nbreg_lf nbreg_p nbreg_sw nestreg net newey newey_7 newey_p news nl nl_7 nl_9 nl_9_p nl_p nl_p_7 nlcom nlcom_p nlexp2 nlexp2_7 nlexp2a nlexp2a_7 nlexp3 nlexp3_7 nlgom3 nlgom3_7 nlgom4 nlgom4_7 nlinit nllog3 nllog3_7 nllog4 nllog4_7 nlog_rd nlogit nlogit_p nlogitgen nlogittree nlpred no nobreak noi nois noisi noisil noisily note notes notes_dlg nptrend numlabel numlist odbc old_ver olo olog ologi ologi_sw ologit ologit_p ologitp on one onew onewa oneway op_colnm op_comp op_diff op_inv op_str opr opro oprob oprob_sw oprobi oprobi_p oprobit oprobitp opts_exclusive order orthog orthpoly ou out outf outfi outfil outfile outs outsh outshe outshee outsheet ovtest pac pac_7 palette parse parse_dissim pause pca pca_8 pca_display pca_estat pca_p pca_rotate pcamat pchart pchart_7 pchi pchi_7 pcorr pctile pentium pergram pergram_7 permute permute_8 personal peto_st pkcollapse pkcross pkequiv pkexamine pkexamine_7 pkshape pksumm pksumm_7 pl plo plot plugin pnorm pnorm_7 poisgof poiss_lf poiss_sw poisso_p poisson poisson_estat post postclose postfile postutil pperron pr prais prais_e prais_e2 prais_p predict predictnl preserve print pro prob probi probit probit_estat probit_p proc_time procoverlay procrustes procrustes_estat procrustes_p profiler prog progr progra program prop proportion prtest prtesti pwcorr pwd q\\s qby qbys qchi qchi_7 qladder qladder_7 qnorm qnorm_7 qqplot qqplot_7 qreg qreg_c qreg_p qreg_sw qu quadchk quantile quantile_7 que quer query range ranksum ratio rchart rchart_7 rcof recast reclink recode reg reg3 reg3_p regdw regr regre regre_p2 regres regres_p regress regress_estat regriv_p remap ren rena renam rename renpfix repeat replace report reshape restore ret retu retur return rm rmdir robvar roccomp roccomp_7 roccomp_8 rocf_lf rocfit rocfit_8 rocgold rocplot rocplot_7 roctab roctab_7 rolling rologit rologit_p rot rota rotat rotate rotatemat rreg rreg_p ru run runtest rvfplot rvfplot_7 rvpplot rvpplot_7 sa safesum sample sampsi sav save savedresults saveold sc sca scal scala scalar scatter scm_mine sco scob_lf scob_p scobi_sw scobit scor score scoreplot scoreplot_help scree screeplot screeplot_help sdtest sdtesti se search separate seperate serrbar serrbar_7 serset set set_defaults sfrancia sh she shel shell shewhart shewhart_7 signestimationsample signrank signtest simul simul_7 simulate simulate_8 sktest sleep slogit slogit_d2 slogit_p smooth snapspan so sor sort spearman spikeplot spikeplot_7 spikeplt spline_x split sqreg sqreg_p sret sretu sretur sreturn ssc st st_ct st_hc st_hcd st_hcd_sh st_is st_issys st_note st_promo st_set st_show st_smpl st_subid stack statsby statsby_8 stbase stci stci_7 stcox stcox_estat stcox_fr stcox_fr_ll stcox_p stcox_sw stcoxkm stcoxkm_7 stcstat stcurv stcurve stcurve_7 stdes stem stepwise stereg stfill stgen stir stjoin stmc stmh stphplot stphplot_7 stphtest stphtest_7 stptime strate strate_7 streg streg_sw streset sts sts_7 stset stsplit stsum sttocc sttoct stvary stweib su suest suest_8 sum summ summa summar summari summariz summarize sunflower sureg survcurv survsum svar svar_p svmat svy svy_disp svy_dreg svy_est svy_est_7 svy_estat svy_get svy_gnbreg_p svy_head svy_header svy_heckman_p svy_heckprob_p svy_intreg_p svy_ivreg_p svy_logistic_p svy_logit_p svy_mlogit_p svy_nbreg_p svy_ologit_p svy_oprobit_p svy_poisson_p svy_probit_p svy_regress_p svy_sub svy_sub_7 svy_x svy_x_7 svy_x_p svydes svydes_8 svygen svygnbreg svyheckman svyheckprob svyintreg svyintreg_7 svyintrg svyivreg svylc svylog_p svylogit svymarkout svymarkout_8 svymean svymlog svymlogit svynbreg svyolog svyologit svyoprob svyoprobit svyopts svypois svypois_7 svypoisson svyprobit svyprobt svyprop svyprop_7 svyratio svyreg svyreg_p svyregress svyset svyset_7 svyset_8 svytab svytab_7 svytest svytotal sw sw_8 swcnreg swcox swereg swilk swlogis swlogit swologit swoprbt swpois swprobit swqreg swtobit swweib symmetry symmi symplot symplot_7 syntax sysdescribe sysdir sysuse szroeter ta tab tab1 tab2 tab_or tabd tabdi tabdis tabdisp tabi table tabodds tabodds_7 tabstat tabu tabul tabula tabulat tabulate te tempfile tempname tempvar tes test testnl testparm teststd tetrachoric time_it timer tis tob tobi tobit tobit_p tobit_sw token tokeni tokeniz tokenize tostring total translate translator transmap treat_ll treatr_p treatreg trim trimfill trnb_cons trnb_mean trpoiss_d2 trunc_ll truncr_p truncreg tsappend tset tsfill tsline tsline_ex tsreport tsrevar tsrline tsset tssmooth tsunab ttest ttesti tut_chk tut_wait tutorial tw tware_st two twoway twoway__fpfit_serset twoway__function_gen twoway__histogram_gen twoway__ipoint_serset twoway__ipoints_serset twoway__kdensity_gen twoway__lfit_serset twoway__normgen_gen twoway__pci_serset twoway__qfit_serset twoway__scatteri_serset twoway__sunflower_gen twoway_ksm_serset ty typ type typeof u|0 unab unabbrev unabcmd update us use uselabel var var_mkcompanion var_p varbasic varfcast vargranger varirf varirf_add varirf_cgraph varirf_create varirf_ctable varirf_describe varirf_dir varirf_drop varirf_erase varirf_graph varirf_ograph varirf_rename varirf_set varirf_table varlist varlmar varnorm varsoc varstable varstable_w varstable_w2 varwle vce vec vec_fevd vec_mkphi vec_p vec_p_w vecirf_create veclmar veclmar_w vecnorm vecnorm_w vecrank vecstable verinst vers versi versio version view viewsource vif vwls wdatetof webdescribe webseek webuse weib1_lf weib2_lf weib_lf weib_lf0 weibhet_glf weibhet_glf_sh weibhet_glfa weibhet_glfa_sh weibhet_gp weibhet_ilf weibhet_ilf_sh weibhet_ilfa weibhet_ilfa_sh weibhet_ip weibu_sw weibul_p weibull weibull_c weibull_s weibullhet wh whelp whi which whil while wilc_st wilcoxon win wind windo window winexec wntestb wntestb_7 wntestq xchart xchart_7 xcorr xcorr_7 xi xi_6 xmlsav xmlsave xmluse xpose xsh xshe xshel xshell xt_iis xt_tis xtab_p xtabond xtbin_p xtclog xtcloglog xtcloglog_8 xtcloglog_d2 xtcloglog_pa_p xtcloglog_re_p xtcnt_p xtcorr xtdata xtdes xtfront_p xtfrontier xtgee xtgee_elink xtgee_estat xtgee_makeivar xtgee_p xtgee_plink xtgls xtgls_p xthaus xthausman xtht_p xthtaylor xtile xtint_p xtintreg xtintreg_8 xtintreg_d2 xtintreg_p xtivp_1 xtivp_2 xtivreg xtline xtline_ex xtlogit xtlogit_8 xtlogit_d2 xtlogit_fe_p xtlogit_pa_p xtlogit_re_p xtmixed xtmixed_estat xtmixed_p xtnb_fe xtnb_lf xtnbreg xtnbreg_pa_p xtnbreg_refe_p xtpcse xtpcse_p xtpois xtpoisson xtpoisson_d2 xtpoisson_pa_p xtpoisson_refe_p xtpred xtprobit xtprobit_8 xtprobit_d2 xtprobit_re_p xtps_fe xtps_lf xtps_ren xtps_ren_8 xtrar_p xtrc xtrc_p xtrchh xtrefe_p xtreg xtreg_be xtreg_fe xtreg_ml xtreg_pa_p xtreg_re xtregar xtrere_p xtset xtsf_ll xtsf_llti xtsum xttab xttest0 xttobit xttobit_8 xttobit_p xttrans yx yxview__barlike_draw yxview_area_draw yxview_bar_draw yxview_dot_draw yxview_dropline_draw yxview_function_draw yxview_iarrow_draw yxview_ilabels_draw yxview_normal_draw yxview_pcarrow_draw yxview_pcbarrow_draw yxview_pccapsym_draw yxview_pcscatter_draw yxview_pcspike_draw yxview_rarea_draw yxview_rbar_draw yxview_rbarm_draw yxview_rcap_draw yxview_rcapsym_draw yxview_rconnected_draw yxview_rline_draw yxview_rscatter_draw yxview_rspike_draw yxview_spike_draw yxview_sunflower_draw zap_s zinb zinb_llf zinb_plf zip zip_llf zip_p zip_plf zt_ct_5 zt_hc_5 zt_hcd_5 zt_is_5 zt_iss_5 zt_sho_5 zt_smp_5 ztbase_5 ztcox_5 ztdes_5 ztereg_5 ztfill_5 ztgen_5 ztir_5 ztjoin_5 ztnb ztnb_p ztp ztp_p zts_5 ztset_5 ztspli_5 ztsum_5 zttoct_5 ztvary_5 ztweib_5",
            contains: [{
                className: "symbol",
                begin: /`[a-zA-Z0-9_]+'/
            }, {
                className: "variable",
                begin: /\$\{?[a-zA-Z0-9_]+\}?/
            }, {
                className: "string",
                variants: [{
                    begin: `\`"[^\r
]*?"'`
                }, {
                    begin: `"[^\r
"]*"`
                }]
            }, {
                className: "built_in",
                variants: [{
                    begin: "\\b(abs|acos|asin|atan|atan2|atanh|ceil|cloglog|comb|cos|digamma|exp|floor|invcloglog|invlogit|ln|lnfact|lnfactorial|lngamma|log|log10|max|min|mod|reldif|round|sign|sin|sqrt|sum|tan|tanh|trigamma|trunc|betaden|Binomial|binorm|binormal|chi2|chi2tail|dgammapda|dgammapdada|dgammapdadx|dgammapdx|dgammapdxdx|F|Fden|Ftail|gammaden|gammap|ibeta|invbinomial|invchi2|invchi2tail|invF|invFtail|invgammap|invibeta|invnchi2|invnFtail|invnibeta|invnorm|invnormal|invttail|nbetaden|nchi2|nFden|nFtail|nibeta|norm|normal|normalden|normd|npnchi2|tden|ttail|uniform|abbrev|char|index|indexnot|length|lower|ltrim|match|plural|proper|real|regexm|regexr|regexs|reverse|rtrim|string|strlen|strlower|strltrim|strmatch|strofreal|strpos|strproper|strreverse|strrtrim|strtrim|strupper|subinstr|subinword|substr|trim|upper|word|wordcount|_caller|autocode|byteorder|chop|clip|cond|e|epsdouble|epsfloat|group|inlist|inrange|irecode|matrix|maxbyte|maxdouble|maxfloat|maxint|maxlong|mi|minbyte|mindouble|minfloat|minint|minlong|missing|r|recode|replay|return|s|scalar|d|date|day|dow|doy|halfyear|mdy|month|quarter|week|year|d|daily|dofd|dofh|dofm|dofq|dofw|dofy|h|halfyearly|hofd|m|mofd|monthly|q|qofd|quarterly|tin|twithin|w|weekly|wofd|y|yearly|yh|ym|yofd|yq|yw|cholesky|colnumb|colsof|corr|det|diag|diag0cnt|el|get|hadamard|I|inv|invsym|issym|issymmetric|J|matmissing|matuniform|mreldif|nullmat|rownumb|rowsof|sweep|syminv|trace|vec|vecdiag)(?=\\()"
                }]
            }, A.COMMENT("^[ \t]*\\*.*$", !1), A.C_LINE_COMMENT_MODE, A.C_BLOCK_COMMENT_MODE]
        }
    }
    qd0.exports = g44
});
var Md0 = U((S87, Ld0) => {
    function u44(A) {
        return {
            name: "STEP Part 21",
            aliases: ["p21", "step", "stp"],
            case_insensitive: !0,
            keywords: {
                $pattern: "[A-Z_][A-Z0-9_.]*",
                keyword: "HEADER ENDSEC DATA"
            },
            contains: [{
                className: "meta",
                begin: "ISO-10303-21;",
                relevance: 10
            }, {
                className: "meta",
                begin: "END-ISO-10303-21;",
                relevance: 10
            }, A.C_LINE_COMMENT_MODE, A.C_BLOCK_COMMENT_MODE, A.COMMENT("/\\*\\*!", "\\*/"), A.C_NUMBER_MODE, A.inherit(A.APOS_STRING_MODE, {
                illegal: null
            }), A.inherit(A.QUOTE_STRING_MODE, {
                illegal: null
            }), {
                className: "string",
                begin: "'",
                end: "'"
            }, {
                className: "symbol",
                variants: [{
                    begin: "#",
                    end: "\\d+",
                    illegal: "\\W"
                }]
            }]
        }
    }
    Ld0.exports = u44
});
var Rd0 = U((_87, Od0) => {
    var m44 = (A) => {
            return {
                IMPORTANT: {
                    className: "meta",
                    begin: "!important"
                },
                HEXCOLOR: {
                    className: "number",
                    begin: "#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})"
                },
                ATTRIBUTE_SELECTOR_MODE: {
                    className: "selector-attr",
                    begin: /\[/,
                    end: /\]/,
                    illegal: "$",
                    contains: [A.APOS_STRING_MODE, A.QUOTE_STRING_MODE]
                }
            }
        },
        d44 = ["a", "abbr", "address", "article", "aside", "audio", "b", "blockquote", "body", "button", "canvas", "caption", "cite", "code", "dd", "del", "details", "dfn", "div", "dl", "dt", "em", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "html", "i", "iframe", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "mark", "menu", "nav", "object", "ol", "p", "q", "quote", "samp", "section", "span", "strong", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "ul", "var", "video"],
        c44 = ["any-hover", "any-pointer", "aspect-ratio", "color", "color-gamut", "color-index", "device-aspect-ratio", "device-height", "device-width", "display-mode", "forced-colors", "grid", "height", "hover", "inverted-colors", "monochrome", "orientation", "overflow-block", "overflow-inline", "pointer", "prefers-color-scheme", "prefers-contrast", "prefers-reduced-motion", "prefers-reduced-transparency", "resolution", "scan", "scripting", "update", "width", "min-width", "max-width", "min-height", "max-height"],
        p44 = ["active", "any-link", "blank", "checked", "current", "default", "defined", "dir", "disabled", "drop", "empty", "enabled", "first", "first-child", "first-of-type", "fullscreen", "future", "focus", "focus-visible", "focus-within", "has", "host", "host-context", "hover", "indeterminate", "in-range", "invalid", "is", "lang", "last-child", "last-of-type", "left", "link", "local-link", "not", "nth-child", "nth-col", "nth-last-child", "nth-last-col", "nth-last-of-type", "nth-of-type", "only-child", "only-of-type", "optional", "out-of-range", "past", "placeholder-shown", "read-only", "read-write", "required", "right", "root", "scope", "target", "target-within", "user-invalid", "valid", "visited", "where"],
        l44 = ["after", "backdrop", "before", "cue", "cue-region", "first-letter", "first-line", "grammar-error", "marker", "part", "placeholder", "selection", "slotted", "spelling-error"],
        i44 = ["align-content", "align-items", "align-self", "animation", "animation-delay", "animation-direction", "animation-duration", "animation-fill-mode", "animation-iteration-count", "animation-name", "animation-play-state", "animation-timing-function", "auto", "backface-visibility", "background", "background-attachment", "background-clip", "background-color", "background-image", "background-origin", "background-position", "background-repeat", "background-size", "border", "border-bottom", "border-bottom-color", "border-bottom-left-radius", "border-bottom-right-radius", "border-bottom-style", "border-bottom-width", "border-collapse", "border-color", "border-image", "border-image-outset", "border-image-repeat", "border-image-slice", "border-image-source", "border-image-width", "border-left", "border-left-color", "border-left-style", "border-left-width", "border-radius", "border-right", "border-right-color", "border-right-style", "border-right-width", "border-spacing", "border-style", "border-top", "border-top-color", "border-top-left-radius", "border-top-right-radius", "border-top-style", "border-top-width", "border-width", "bottom", "box-decoration-break", "box-shadow", "box-sizing", "break-after", "break-before", "break-inside", "caption-side", "clear", "clip", "clip-path", "color", "column-count", "column-fill", "column-gap", "column-rule", "column-rule-color", "column-rule-style", "column-rule-width", "column-span", "column-width", "columns", "content", "counter-increment", "counter-reset", "cursor", "direction", "display", "empty-cells", "filter", "flex", "flex-basis", "flex-direction", "flex-flow", "flex-grow", "flex-shrink", "flex-wrap", "float", "font", "font-display", "font-family", "font-feature-settings", "font-kerning", "font-language-override", "font-size", "font-size-adjust", "font-smoothing", "font-stretch", "font-style", "font-variant", "font-variant-ligatures", "font-variation-settings", "font-weight", "height", "hyphens", "icon", "image-orientation", "image-rendering", "image-resolution", "ime-mode", "inherit", "initial", "justify-content", "left", "letter-spacing", "line-height", "list-style", "list-style-image", "list-style-position", "list-style-type", "margin", "margin-bottom", "margin-left", "margin-right", "margin-top", "marks", "mask", "max-height", "max-width", "min-height", "min-width", "nav-down", "nav-index", "nav-left", "nav-right", "nav-up", "none", "normal", "object-fit", "object-position", "opacity", "order", "orphans", "outline", "outline-color", "outline-offset", "outline-style", "outline-width", "overflow", "overflow-wrap", "overflow-x", "overflow-y", "padding", "padding-bottom", "padding-left", "padding-right", "padding-top", "page-break-after", "page-break-before", "page-break-inside", "perspective", "perspective-origin", "pointer-events", "position", "quotes", "resize", "right", "src", "tab-size", "table-layout", "text-align", "text-align-last", "text-decoration", "text-decoration-color", "text-decoration-line", "text-decoration-style", "text-indent", "text-overflow", "text-rendering", "text-shadow", "text-transform", "text-underline-position", "top", "transform", "transform-origin", "transform-style", "transition", "transition-delay", "transition-duration", "transition-property", "transition-timing-function", "unicode-bidi", "vertical-align", "visibility", "white-space", "widows", "width", "word-break", "word-spacing", "word-wrap", "z-index"].reverse();

    function n44(A) {
        let Q = m44(A),
            B = "and or not only",
            G = {
                className: "variable",
                begin: "\\$" + A.IDENT_RE
            },
            Z = ["charset", "css", "debug", "extend", "font-face", "for", "import", "include", "keyframes", "media", "mixin", "page", "warn", "while"],
            I = "(?=[.\\s\\n[:,(])";
        return {
            name: "Stylus",
            aliases: ["styl"],
            case_insensitive: !1,
            keywords: "if else for in",
            illegal: "(" + ["\\?", "(\\bReturn\\b)", "(\\bEnd\\b)", "(\\bend\\b)", "(\\bdef\\b)", ";", "#\\s", "\\*\\s", "===\\s", "\\|", "%"].join("|") + ")",
            contains: [A.QUOTE_STRING_MODE, A.APOS_STRING_MODE, A.C_LINE_COMMENT_MODE, A.C_BLOCK_COMMENT_MODE, Q.HEXCOLOR, {
                begin: "\\.[a-zA-Z][a-zA-Z0-9_-]*(?=[.\\s\\n[:,(])",
                className: "selector-class"
            }, {
                begin: "#[a-zA-Z][a-zA-Z0-9_-]*(?=[.\\s\\n[:,(])",
                className: "selector-id"
            }, {
                begin: "\\b(" + d44.join("|") + ")(?=[.\\s\\n[:,(])",
                className: "selector-tag"
            }, {
                className: "selector-pseudo",
                begin: "&?:(" + p44.join("|") + ")(?=[.\\s\\n[:,(])"
            }, {
                className: "selector-pseudo",
                begin: "&?::(" + l44.join("|") + ")(?=[.\\s\\n[:,(])"
            }, Q.ATTRIBUTE_SELECTOR_MODE, {
                className: "keyword",
                begin: /@media/,
                starts: {
                    end: /[{;}]/,
                    keywords: {
                        $pattern: /[a-z-]+/,
                        keyword: "and or not only",
                        attribute: c44.join(" ")
                    },
                    contains: [A.CSS_NUMBER_MODE]
                }
            }, {
                className: "keyword",
                begin: "@((-(o|moz|ms|webkit)-)?(" + Z.join("|") + "))\\b"
            }, G, A.CSS_NUMBER_MODE, {
                className: "function",
                begin: "^[a-zA-Z][a-zA-Z0-9_-]*\\(.*\\)",
                illegal: "[\\n]",
                returnBegin: !0,
                contains: [{
                    className: "title",
                    begin: "\\b[a-zA-Z][a-zA-Z0-9_-]*"
                }, {
                    className: "params",
                    begin: /\(/,
                    end: /\)/,
                    contains: [Q.HEXCOLOR, G, A.APOS_STRING_MODE, A.CSS_NUMBER_MODE, A.QUOTE_STRING_MODE]
                }]
            }, {
                className: "attribute",
                begin: "\\b(" + i44.join("|") + ")\\b",
                starts: {
                    end: /;|$/,
                    contains: [Q.HEXCOLOR, G, A.APOS_STRING_MODE, A.QUOTE_STRING_MODE, A.CSS_NUMBER_MODE, A.C_BLOCK_COMMENT_MODE, Q.IMPORTANT],
                    illegal: /\./,
                    relevance: 0
                }
            }]
        }
    }
    Od0.exports = n44
});
var Pd0 = U((k87, Td0) => {
    function a44(A) {
        return {
            name: "SubUnit",
            case_insensitive: !0,
            contains: [{
                className: "string",
                begin: `\\[
(multipart)?`,
                end: `\\]
`
            }, {
                className: "string",
                begin: "\\d{4}-\\d{2}-\\d{2}(\\s+)\\d{2}:\\d{2}:\\d{2}.\\d+Z"
            }, {
                className: "string",
                begin: "(\\+|-)\\d+"
            }, {
                className: "keyword",
                relevance: 10,
                variants: [{
                    begin: "^(test|testing|success|successful|failure|error|skip|xfail|uxsuccess)(:?)\\s+(test)?"
                }, {
                    begin: "^progress(:?)(\\s+)?(pop|push)?"
                }, {
                    begin: "^tags:"
                }, {
                    begin: "^time:"
                }]
            }]
        }
    }
    Td0.exports = a44
});
var fd0 = U((y87, bd0) => {
    function kd0(A) {
        if (!A) return null;
        if (typeof A === "string") return A;
        return A.source
    }

    function w9A(A) {
        return nG("(?=", A, ")")
    }

    function nG(...A) {
        return A.map((B) => kd0(B)).join("")
    }

    function mC(...A) {
        return "(" + A.map((B) => kd0(B)).join("|") + ")"
    }
    var sH1 = (A) => nG(/\b/, A, /\w$/.test(A) ? /\b/ : /\B/),
        jd0 = ["Protocol", "Type"].map(sH1),
        lH1 = ["init", "self"].map(sH1),
        s44 = ["Any", "Self"],
        iH1 = ["associatedtype", "async", "await", /as\?/, /as!/, "as", "break", "case", "catch", "class", "continue", "convenience", "default", "defer", "deinit", "didSet", "do", "dynamic", "else", "enum", "extension", "fallthrough", /fileprivate\(set\)/, "fileprivate", "final", "for", "func", "get", "guard", "if", "import", "indirect", "infix", /init\?/, /init!/, "inout", /internal\(set\)/, "internal", "in", "is", "lazy", "let", "mutating", "nonmutating", /open\(set\)/, "open", "operator", "optional", "override", "postfix", "precedencegroup", "prefix", /private\(set\)/, "private", "protocol", /public\(set\)/, "public", "repeat", "required", "rethrows", "return", "set", "some", "static", "struct", "subscript", "super", "switch", "throws", "throw", /try\?/, /try!/, "try", "typealias", /unowned\(safe\)/, /unowned\(unsafe\)/, "unowned", "var", "weak", "where", "while", "willSet"],
        Sd0 = ["false", "nil", "true"],
        r44 = ["assignment", "associativity", "higherThan", "left", "lowerThan", "none", "right"],
        o44 = ["#colorLiteral", "#column", "#dsohandle", "#else", "#elseif", "#endif", "#error", "#file", "#fileID", "#fileLiteral", "#filePath", "#function", "#if", "#imageLiteral", "#keyPath", "#line", "#selector", "#sourceLocation", "#warn_unqualified_access", "#warning"],
        _d0 = ["abs", "all", "any", "assert", "assertionFailure", "debugPrint", "dump", "fatalError", "getVaList", "isKnownUniquelyReferenced", "max", "min", "numericCast", "pointwiseMax", "pointwiseMin", "precondition", "preconditionFailure", "print", "readLine", "repeatElement", "sequence", "stride", "swap", "swift_unboxFromSwiftValueWithType", "transcode", "type", "unsafeBitCast", "unsafeDowncast", "withExtendedLifetime", "withUnsafeMutablePointer", "withUnsafePointer", "withVaList", "withoutActuallyEscaping", "zip"],
        yd0 = mC(/[/=\-+!*%<>&|^~?]/, /[\u00A1-\u00A7]/, /[\u00A9\u00AB]/, /[\u00AC\u00AE]/, /[\u00B0\u00B1]/, /[\u00B6\u00BB\u00BF\u00D7\u00F7]/, /[\u2016-\u2017]/, /[\u2020-\u2027]/, /[\u2030-\u203E]/, /[\u2041-\u2053]/, /[\u2055-\u205E]/, /[\u2190-\u23FF]/, /[\u2500-\u2775]/, /[\u2794-\u2BFF]/, /[\u2E00-\u2E7F]/, /[\u3001-\u3003]/, /[\u3008-\u3020]/, /[\u3030]/),
        xd0 = mC(yd0, /[\u0300-\u036F]/, /[\u1DC0-\u1DFF]/, /[\u20D0-\u20FF]/, /[\uFE00-\uFE0F]/, /[\uFE20-\uFE2F]/),
        nH1 = nG(yd0, xd0, "*"),
        vd0 = mC(/[a-zA-Z_]/, /[\u00A8\u00AA\u00AD\u00AF\u00B2-\u00B5\u00B7-\u00BA]/, /[\u00BC-\u00BE\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF]/, /[\u0100-\u02FF\u0370-\u167F\u1681-\u180D\u180F-\u1DBF]/, /[\u1E00-\u1FFF]/, /[\u200B-\u200D\u202A-\u202E\u203F-\u2040\u2054\u2060-\u206F]/, /[\u2070-\u20CF\u2100-\u218F\u2460-\u24FF\u2776-\u2793]/, /[\u2C00-\u2DFF\u2E80-\u2FFF]/, /[\u3004-\u3007\u3021-\u302F\u3031-\u303F\u3040-\uD7FF]/, /[\uF900-\uFD3D\uFD40-\uFDCF\uFDF0-\uFE1F\uFE30-\uFE44]/, /[\uFE47-\uFEFE\uFF00-\uFFFD]/),
        yxA = mC(vd0, /\d/, /[\u0300-\u036F\u1DC0-\u1DFF\u20D0-\u20FF\uFE20-\uFE2F]/),
        Av = nG(vd0, yxA, "*"),
        aH1 = nG(/[A-Z]/, yxA, "*"),
        t44 = ["autoclosure", nG(/convention\(/, mC("swift", "block", "c"), /\)/), "discardableResult", "dynamicCallable", "dynamicMemberLookup", "escaping", "frozen", "GKInspectable", "IBAction", "IBDesignable", "IBInspectable", "IBOutlet", "IBSegueAction", "inlinable", "main", "nonobjc", "NSApplicationMain", "NSCopying", "NSManaged", nG(/objc\(/, Av, /\)/), "objc", "objcMembers", "propertyWrapper", "requires_stored_property_inits", "testable", "UIApplicationMain", "unknown", "usableFromInline"],
        e44 = ["iOS", "iOSApplicationExtension", "macOS", "macOSApplicationExtension", "macCatalyst", "macCatalystApplicationExtension", "watchOS", "watchOSApplicationExtension", "tvOS", "tvOSApplicationExtension", "swift"];

    function A84(A) {
        let Q = {
                match: /\s+/,
                relevance: 0
            },
            B = A.COMMENT("/\\*", "\\*/", {
                contains: ["self"]
            }),
            G = [A.C_LINE_COMMENT_MODE, B],
            Z = {
                className: "keyword",
                begin: nG(/\./, w9A(mC(...jd0, ...lH1))),
                end: mC(...jd0, ...lH1),
                excludeBegin: !0
            },
            I = {
                match: nG(/\./, mC(...iH1)),
                relevance: 0
            },
            Y = iH1.filter((XA) => typeof XA === "string").concat(["_|0"]),
            J = iH1.filter((XA) => typeof XA !== "string").concat(s44).map(sH1),
            W = {
                variants: [{
                    className: "keyword",
                    match: mC(...J, ...lH1)
                }]
            },
            X = {
                $pattern: mC(/\b\w+/, /#\w+/),
                keyword: Y.concat(o44),
                literal: Sd0
            },
            F = [Z, I, W],
            V = {
                match: nG(/\./, mC(..._d0)),
                relevance: 0
            },
            K = {
                className: "built_in",
                match: nG(/\b/, mC(..._d0), /(?=\()/)
            },
            D = [V, K],
            H = {
                match: /->/,
                relevance: 0
            },
            C = {
                className: "operator",
                relevance: 0,
                variants: [{
                    match: nH1
                }, {
                    match: `\\.(\\.|${xd0})+`
                }]
            },
            E = [H, C],
            z = "([0-9]_*)+",
            w = "([0-9a-fA-F]_*)+",
            N = {
                className: "number",
                relevance: 0,
                variants: [{
                    match: "\\b(([0-9]_*)+)(\\.(([0-9]_*)+))?([eE][+-]?(([0-9]_*)+))?\\b"
                }, {
                    match: "\\b0x(([0-9a-fA-F]_*)+)(\\.(([0-9a-fA-F]_*)+))?([pP][+-]?(([0-9]_*)+))?\\b"
                }, {
                    match: /\b0o([0-7]_*)+\b/
                }, {
                    match: /\b0b([01]_*)+\b/
                }]
            },
            q = (XA = "") => ({
                className: "subst",
                variants: [{
                    match: nG(/\\/, XA, /[0\\tnr"']/)
                }, {
                    match: nG(/\\/, XA, /u\{[0-9a-fA-F]{1,8}\}/)
                }]
            }),
            R = (XA = "") => ({
                className: "subst",
                match: nG(/\\/, XA, /[\t ]*(?:[\r\n]|\r\n)/)
            }),
            P = (XA = "") => ({
                className: "subst",
                label: "interpol",
                begin: nG(/\\/, XA, /\(/),
                end: /\)/
            }),
            y = (XA = "") => ({
                begin: nG(XA, /"""/),
                end: nG(/"""/, XA),
                contains: [q(XA), R(XA), P(XA)]
            }),
            v = (XA = "") => ({
                begin: nG(XA, /"/),
                end: nG(/"/, XA),
                contains: [q(XA), P(XA)]
            }),
            x = {
                className: "string",
                variants: [y(), y("#"), y("##"), y("###"), v(), v("#"), v("##"), v("###")]
            },
            p = {
                match: nG(/`/, Av, /`/)
            },
            u = {
                className: "variable",
                match: /\$\d+/
            },
            o = {
                className: "variable",
                match: `\\$${yxA}+`
            },
            l = [p, u, o],
            k = {
                match: /(@|#)available/,
                className: "keyword",
                starts: {
                    contains: [{
                        begin: /\(/,
                        end: /\)/,
                        keywords: e44,
                        contains: [...E, N, x]
                    }]
                }
            },
            d = {
                className: "keyword",
                match: nG(/@/, mC(...t44))
            },
            QA = {
                className: "meta",
                match: nG(/@/, Av)
            },
            IA = [k, d, QA],
            HA = {
                match: w9A(/\b[A-Z]/),
                relevance: 0,
                contains: [{
                    className: "type",
                    match: nG(/(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)/, yxA, "+")
                }, {
                    className: "type",
                    match: aH1,
                    relevance: 0
                }, {
                    match: /[?!]+/,
                    relevance: 0
                }, {
                    match: /\.\.\./,
                    relevance: 0
                }, {
                    match: nG(/\s+&\s+/, w9A(aH1)),
                    relevance: 0
                }]
            },
            wA = {
                begin: /</,
                end: />/,
                keywords: X,
                contains: [...G, ...F, ...IA, H, HA]
            };
        HA.contains.push(wA);
        let KA = {
                match: nG(Av, /\s*:/),
                keywords: "_|0",
                relevance: 0
            },
            SA = {
                begin: /\(/,
                end: /\)/,
                relevance: 0,
                keywords: X,
                contains: ["self", KA, ...G, ...F, ...D, ...E, N, x, ...l, ...IA, HA]
            },
            sA = {
                beginKeywords: "func",
                contains: [{
                    className: "title",
                    match: mC(p.match, Av, nH1),
                    endsParent: !0,
                    relevance: 0
                }, Q]
            },
            NA = {
                begin: /</,
                end: />/,
                contains: [...G, HA]
            },
            qA = {
                begin: mC(w9A(nG(Av, /\s*:/)), w9A(nG(Av, /\s+/, Av, /\s*:/))),
                end: /:/,
                relevance: 0,
                contains: [{
                    className: "keyword",
                    match: /\b_\b/
                }, {
                    className: "params",
                    match: Av
                }]
            },
            DA = {
                begin: /\(/,
                end: /\)/,
                keywords: X,
                contains: [qA, ...G, ...F, ...E, N, x, ...IA, HA, SA],
                endsParent: !0,
                illegal: /["']/
            },
            yA = {
                className: "function",
                match: w9A(/\bfunc\b/),
                contains: [sA, NA, DA, Q],
                illegal: [/\[/, /%/]
            },
            rA = {
                className: "function",
                match: /\b(subscript|init[?!]?)\s*(?=[<(])/,
                keywords: {
                    keyword: "subscript init init? init!",
                    $pattern: /\w+[?!]?/
                },
                contains: [NA, DA, Q],
                illegal: /\[|%/
            },
            K1 = {
                beginKeywords: "operator",
                end: A.MATCH_NOTHING_RE,
                contains: [{
                    className: "title",
                    match: nH1,
                    endsParent: !0,
                    relevance: 0
                }]
            },
            WA = {
                beginKeywords: "precedencegroup",
                end: A.MATCH_NOTHING_RE,
                contains: [{
                    className: "title",
                    match: aH1,
                    relevance: 0
                }, {
                    begin: /{/,
                    end: /}/,
                    relevance: 0,
                    endsParent: !0,
                    keywords: [...r44, ...Sd0],
                    contains: [HA]
                }]
            };
        for (let XA of x.variants) {
            let zA = XA.contains.find((LA) => LA.label === "interpol");
            zA.keywords = X;
            let $A = [...F, ...D, ...E, N, x, ...l];
            zA.contains = [...$A, {
                begin: /\(/,
                end: /\)/,
                contains: ["self", ...$A]
            }]
        }
        return {
            name: "Swift",
            keywords: X,
            contains: [...G, yA, rA, {
                className: "class",
                beginKeywords: "struct protocol class extension enum",
                end: "\\{",
                excludeEnd: !0,
                keywords: X,
                contains: [A.inherit(A.TITLE_MODE, {
                    begin: /[A-Za-z$_][\u00C0-\u02B80-9A-Za-z$_]*/
                }), ...F]
            }, K1, WA, {
                beginKeywords: "import",
                end: /$/,
                contains: [...G],
                relevance: 0
            }, ...F, ...D, ...E, N, x, ...l, ...IA, HA, SA]
        }
    }
    bd0.exports = A84
});
var gd0 = U((x87, hd0) => {
    function Q84(A) {
        return {
            name: "Tagger Script",
            contains: [{
                className: "comment",
                begin: /\$noop\(/,
                end: /\)/,
                contains: [{
                    begin: /\(/,
                    end: /\)/,
                    contains: ["self", {
                        begin: /\\./
                    }]
                }],
                relevance: 10
            }, {
                className: "keyword",
                begin: /\$(?!noop)[a-zA-Z][_a-zA-Z0-9]*/,
                end: /\(/,
                excludeEnd: !0
            }, {
                className: "variable",
                begin: /%[_a-zA-Z0-9:]*/,
                end: "%"
            }, {
                className: "symbol",
                begin: /\\./
            }]
        }
    }
    hd0.exports = Q84
});
var md0 = U((v87, ud0) => {
    function B84(A) {
        var Q = "true false yes no null",
            B = "[\\w#;/?:@&=+$,.~*'()[\\]]+",
            G = {
                className: "attr",
                variants: [{
                    begin: "\\w[\\w :\\/.-]*:(?=[ \t]|$)"
                }, {
                    begin: '"\\w[\\w :\\/.-]*":(?=[ \t]|$)'
                }, {
                    begin: "'\\w[\\w :\\/.-]*':(?=[ \t]|$)"
                }]
            },
            Z = {
                className: "template-variable",
                variants: [{
                    begin: /\{\{/,
                    end: /\}\}/
                }, {
                    begin: /%\{/,
                    end: /\}/
                }]
            },
            I = {
                className: "string",
                relevance: 0,
                variants: [{
                    begin: /'/,
                    end: /'/
                }, {
                    begin: /"/,
                    end: /"/
                }, {
                    begin: /\S+/
                }],
                contains: [A.BACKSLASH_ESCAPE, Z]
            },
            Y = A.inherit(I, {
                variants: [{
                    begin: /'/,
                    end: /'/
                }, {
                    begin: /"/,
                    end: /"/
                }, {
                    begin: /[^\s,{}[\]]+/
                }]
            }),
            J = "[0-9]{4}(-[0-9][0-9]){0,2}",
            W = "([Tt \\t][0-9][0-9]?(:[0-9][0-9]){2})?",
            X = "(\\.[0-9]*)?",
            F = "([ \\t])*(Z|[-+][0-9][0-9]?(:[0-9][0-9])?)?",
            V = {
                className: "number",
                begin: "\\b" + J + W + X + F + "\\b"
            },
            K = {
                end: ",",
                endsWithParent: !0,
                excludeEnd: !0,
                keywords: Q,
                relevance: 0
            },
            D = {
                begin: /\{/,
                end: /\}/,
                contains: [K],
                illegal: "\\n",
                relevance: 0
            },
            H = {
                begin: "\\[",
                end: "\\]",
                contains: [K],
                illegal: "\\n",
                relevance: 0
            },
            C = [G, {
                className: "meta",
                begin: "^---\\s*$",
                relevance: 10
            }, {
                className: "string",
                begin: "[\\|>]([1-9]?[+-])?[ ]*\\n( +)[^ ][^\\n]*\\n(\\2[^\\n]+\\n?)*"
            }, {
                begin: "<%[%=-]?",
                end: "[%-]?%>",
                subLanguage: "ruby",
                excludeBegin: !0,
                excludeEnd: !0,
                relevance: 0
            }, {
                className: "type",
                begin: "!\\w+!" + B
            }, {
                className: "type",
                begin: "!<" + B + ">"
            }, {
                className: "type",
                begin: "!" + B
            }, {
                className: "type",
                begin: "!!" + B
            }, {
                className: "meta",
                begin: "&" + A.UNDERSCORE_IDENT_RE + "$"
            }, {
                className: "meta",
                begin: "\\*" + A.UNDERSCORE_IDENT_RE + "$"
            }, {
                className: "bullet",
                begin: "-(?=[ ]|$)",
                relevance: 0
            }, A.HASH_COMMENT_MODE, {
                beginKeywords: Q,
                keywords: {
                    literal: Q
                }
            }, V, {
                className: "number",
                begin: A.C_NUMBER_RE + "\\b",
                relevance: 0
            }, D, H, I],
            E = [...C];
        return E.pop(), E.push(Y), K.contains = E, {
            name: "YAML",
            case_insensitive: !0,
            aliases: ["yml"],
            contains: C
        }
    }
    ud0.exports = B84
});
var cd0 = U((b87, dd0) => {
    function G84(A) {
        return {
            name: "Test Anything Protocol",
            case_insensitive: !0,
            contains: [A.HASH_COMMENT_MODE, {
                className: "meta",
                variants: [{
                    begin: "^TAP version (\\d+)$"
                }, {
                    begin: "^1\\.\\.(\\d+)$"
                }]
            }, {
                begin: /---$/,
                end: "\\.\\.\\.$",
                subLanguage: "yaml",
                relevance: 0
            }, {
                className: "number",
                begin: " (\\d+) "
            }, {
                className: "symbol",
                variants: [{
                    begin: "^ok"
                }, {
                    begin: "^not ok"
                }]
            }]
        }
    }
    dd0.exports = G84
});
var id0 = U((f87, ld0) => {
    function Z84(A) {
        if (!A) return null;
        if (typeof A === "string") return A;
        return A.source
    }

    function I84(A) {
        return pd0("(", A, ")?")
    }

    function pd0(...A) {
        return A.map((B) => Z84(B)).join("")
    }

    function Y84(A) {
        let Q = /[a-zA-Z_][a-zA-Z0-9_]*/,
            B = {
                className: "number",
                variants: [A.BINARY_NUMBER_MODE, A.C_NUMBER_MODE]
            };
        return {
            name: "Tcl",
            aliases: ["tk"],
            keywords: "after append apply array auto_execok auto_import auto_load auto_mkindex auto_mkindex_old auto_qualify auto_reset bgerror binary break catch cd chan clock close concat continue dde dict encoding eof error eval exec exit expr fblocked fconfigure fcopy file fileevent filename flush for foreach format gets glob global history http if incr info interp join lappend|10 lassign|10 lindex|10 linsert|10 list llength|10 load lrange|10 lrepeat|10 lreplace|10 lreverse|10 lsearch|10 lset|10 lsort|10 mathfunc mathop memory msgcat namespace open package parray pid pkg::create pkg_mkIndex platform platform::shell proc puts pwd read refchan regexp registry regsub|10 rename return safe scan seek set socket source split string subst switch tcl_endOfWord tcl_findLibrary tcl_startOfNextWord tcl_startOfPreviousWord tcl_wordBreakAfter tcl_wordBreakBefore tcltest tclvars tell time tm trace unknown unload unset update uplevel upvar variable vwait while",
            contains: [A.COMMENT(";[ \\t]*#", "$"), A.COMMENT("^[ \\t]*#", "$"), {
                beginKeywords: "proc",
                end: "[\\{]",
                excludeEnd: !0,
                contains: [{
                    className: "title",
                    begin: "[ \\t\\n\\r]+(::)?[a-zA-Z_]((::)?[a-zA-Z0-9_])*",
                    end: "[ \\t\\n\\r]",
                    endsWithParent: !0,
                    excludeEnd: !0
                }]
            }, {
                className: "variable",
                variants: [{
                    begin: pd0(/\$/, I84(/::/), Q, "(::", Q, ")*")
                }, {
                    begin: "\\$\\{(::)?[a-zA-Z_]((::)?[a-zA-Z0-9_])*",
                    end: "\\}",
                    contains: [B]
                }]
            }, {
                className: "string",
                contains: [A.BACKSLASH_ESCAPE],
                variants: [A.inherit(A.QUOTE_STRING_MODE, {
                    illegal: null
                })]
            }, B]
        }
    }
    ld0.exports = Y84
});
var ad0 = U((h87, nd0) => {
    function J84(A) {
        return {
            name: "Thrift",
            keywords: {
                keyword: "namespace const typedef struct enum service exception void oneway set list map required optional",
                built_in: "bool byte i16 i32 i64 double string binary",
                literal: "true false"
            },
            contains: [A.QUOTE_STRING_MODE, A.NUMBER_MODE, A.C_LINE_COMMENT_MODE, A.C_BLOCK_COMMENT_MODE, {
                className: "class",
                beginKeywords: "struct enum service exception",
                end: /\{/,
                illegal: /\n/,
                contains: [A.inherit(A.TITLE_MODE, {
                    starts: {
                        endsWithParent: !0,
                        excludeEnd: !0
                    }
                })]
            }, {
                begin: "\\b(set|list|map)\\s*<",
                end: ">",
                keywords: "bool byte i16 i32 i64 double string binary",
                contains: ["self"]
            }]
        }
    }
    nd0.exports = J84
});
var rd0 = U((g87, sd0) => {
    function W84(A) {
        let Q = {
                className: "number",
                begin: "[1-9][0-9]*",
                relevance: 0
            },
            B = {
                className: "symbol",
                begin: ":[^\\]]+"
            },
            G = {
                className: "built_in",
                begin: "(AR|P|PAYLOAD|PR|R|SR|RSR|LBL|VR|UALM|MESSAGE|UTOOL|UFRAME|TIMER|TIMER_OVERFLOW|JOINT_MAX_SPEED|RESUME_PROG|DIAG_REC)\\[",
                end: "\\]",
                contains: ["self", Q, B]
            },
            Z = {
                className: "built_in",
                begin: "(AI|AO|DI|DO|F|RI|RO|UI|UO|GI|GO|SI|SO)\\[",
                end: "\\]",
                contains: ["self", Q, A.QUOTE_STRING_MODE, B]
            };
        return {
            name: "TP",
            keywords: {
                keyword: "ABORT ACC ADJUST AND AP_LD BREAK CALL CNT COL CONDITION CONFIG DA DB DIV DETECT ELSE END ENDFOR ERR_NUM ERROR_PROG FINE FOR GP GUARD INC IF JMP LINEAR_MAX_SPEED LOCK MOD MONITOR OFFSET Offset OR OVERRIDE PAUSE PREG PTH RT_LD RUN SELECT SKIP Skip TA TB TO TOOL_OFFSET Tool_Offset UF UT UFRAME_NUM UTOOL_NUM UNLOCK WAIT X Y Z W P R STRLEN SUBSTR FINDSTR VOFFSET PROG ATTR MN POS",
                literal: "ON OFF max_speed LPOS JPOS ENABLE DISABLE START STOP RESET"
            },
            contains: [G, Z, {
                className: "keyword",
                begin: "/(PROG|ATTR|MN|POS|END)\\b"
            }, {
                className: "keyword",
                begin: "(CALL|RUN|POINT_LOGIC|LBL)\\b"
            }, {
                className: "keyword",
                begin: "\\b(ACC|CNT|Skip|Offset|PSPD|RT_LD|AP_LD|Tool_Offset)"
            }, {
                className: "number",
                begin: "\\d+(sec|msec|mm/sec|cm/min|inch/min|deg/sec|mm|in|cm)?\\b",
                relevance: 0
            }, A.COMMENT("//", "[;$]"), A.COMMENT("!", "[;$]"), A.COMMENT("--eg:", "$"), A.QUOTE_STRING_MODE, {
                className: "string",
                begin: "'",
                end: "'"
            }, A.C_NUMBER_MODE, {
                className: "variable",
                begin: "\\$[A-Za-z0-9_]+"
            }]
        }
    }
    sd0.exports = W84
});
var td0 = U((u87, od0) => {
    function X84(A) {
        var Q = {
                className: "params",
                begin: "\\(",
                end: "\\)"
            },
            B = "attribute block constant cycle date dump include max min parent random range source template_from_string",
            G = {
                beginKeywords: B,
                keywords: {
                    name: B
                },
                relevance: 0,
                contains: [Q]
            },
            Z = {
                begin: /\|[A-Za-z_]+:?/,
                keywords: "abs batch capitalize column convert_encoding date date_modify default escape filter first format inky_to_html inline_css join json_encode keys last length lower map markdown merge nl2br number_format raw reduce replace reverse round slice sort spaceless split striptags title trim upper url_encode",
                contains: [G]
            },
            I = "apply autoescape block deprecated do embed extends filter flush for from if import include macro sandbox set use verbatim with";
        return I = I + " " + I.split(" ").map(function(Y) {
            return "end" + Y
        }).join(" "), {
            name: "Twig",
            aliases: ["craftcms"],
            case_insensitive: !0,
            subLanguage: "xml",
            contains: [A.COMMENT(/\{#/, /#\}/), {
                className: "template-tag",
                begin: /\{%/,
                end: /%\}/,
                contains: [{
                    className: "name",
                    begin: /\w+/,
                    keywords: I,
                    starts: {
                        endsWithParent: !0,
                        contains: [Z, G],
                        relevance: 0
                    }
                }]
            }, {
                className: "template-variable",
                begin: /\{\{/,
                end: /\}\}/,
                contains: ["self", Z, G]
            }]
        }
    }
    od0.exports = X84
});
var Zc0 = U((m87, Gc0) => {
    var Ac0 = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends"],
        Qc0 = ["true", "false", "null", "undefined", "NaN", "Infinity"],
        F84 = ["Intl", "DataView", "Number", "Math", "Date", "String", "RegExp", "Object", "Function", "Boolean", "Error", "Symbol", "Set", "Map", "WeakSet", "WeakMap", "Proxy", "Reflect", "JSON", "Promise", "Float64Array", "Int16Array", "Int32Array", "Int8Array", "Uint16Array", "Uint32Array", "Float32Array", "Array", "Uint8Array", "Uint8ClampedArray", "ArrayBuffer", "BigInt64Array", "BigUint64Array", "BigInt"],
        V84 = ["EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"],
        K84 = ["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"],
        D84 = ["arguments", "this", "super", "console", "window", "document", "localStorage", "module", "global"],
        Bc0 = [].concat(K84, D84, F84, V84);

    function H84(A) {
        if (!A) return null;
        if (typeof A === "string") return A;
        return A.source
    }

    function ed0(A) {
        return rH1("(?=", A, ")")
    }

    function rH1(...A) {
        return A.map((B) => H84(B)).join("")
    }

    function C84(A) {
        let Q = (q, {
                after: R
            }) => {
                let P = "</" + q[0].slice(1);
                return q.input.indexOf(P, R) !== -1
            },
            B = "[A-Za-z$_][0-9A-Za-z$_]*",
            G = {
                begin: "<>",
                end: "</>"
            },
            Z = {
                begin: /<[A-Za-z0-9\\._:-]+/,
                end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
                isTrulyOpeningTag: (q, R) => {
                    let P = q[0].length + q.index,
                        y = q.input[P];
                    if (y === "<") {
                        R.ignoreMatch();
                        return
                    }
                    if (y === ">") {
                        if (!Q(q, {
                                after: P
                            })) R.ignoreMatch()
                    }
                }
            },
            I = {
                $pattern: "[A-Za-z$_][0-9A-Za-z$_]*",
                keyword: Ac0,
                literal: Qc0,
                built_in: Bc0
            },
            Y = "[0-9](_?[0-9])*",
            J = "\\.([0-9](_?[0-9])*)",
            W = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",
            X = {
                className: "number",
                variants: [{
                    begin: "(\\b(0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*)((\\.([0-9](_?[0-9])*))|\\.)?|(\\.([0-9](_?[0-9])*)))[eE][+-]?([0-9](_?[0-9])*)\\b"
                }, {
                    begin: "\\b(0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*)\\b((\\.([0-9](_?[0-9])*))\\b|\\.)?|(\\.([0-9](_?[0-9])*))\\b"
                }, {
                    begin: "\\b(0|[1-9](_?[0-9])*)n\\b"
                }, {
                    begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"
                }, {
                    begin: "\\b0[bB][0-1](_?[0-1])*n?\\b"
                }, {
                    begin: "\\b0[oO][0-7](_?[0-7])*n?\\b"
                }, {
                    begin: "\\b0[0-7]+n?\\b"
                }],
                relevance: 0
            },
            F = {
                className: "subst",
                begin: "\\$\\{",
                end: "\\}",
                keywords: I,
                contains: []
            },
            V = {
                begin: "html`",
                end: "",
                starts: {
                    end: "`",
                    returnEnd: !1,
                    contains: [A.BACKSLASH_ESCAPE, F],
                    subLanguage: "xml"
                }
            },
            K = {
                begin: "css`",
                end: "",
                starts: {
                    end: "`",
                    returnEnd: !1,
                    contains: [A.BACKSLASH_ESCAPE, F],
                    subLanguage: "css"
                }
            },
            D = {
                className: "string",
                begin: "`",
                end: "`",
                contains: [A.BACKSLASH_ESCAPE, F]
            },
            C = {
                className: "comment",
                variants: [A.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
                    relevance: 0,
                    contains: [{
                        className: "doctag",
                        begin: "@[A-Za-z]+",
                        contains: [{
                            className: "type",
                            begin: "\\{",
                            end: "\\}",
                            relevance: 0
                        }, {
                            className: "variable",
                            begin: "[A-Za-z$_][0-9A-Za-z$_]*(?=\\s*(-)|$)",
                            endsParent: !0,
                            relevance: 0
                        }, {
                            begin: /(?=[^\n])\s/,
                            relevance: 0
                        }]
                    }]
                }), A.C_BLOCK_COMMENT_MODE, A.C_LINE_COMMENT_MODE]
            },
            E = [A.APOS_STRING_MODE, A.QUOTE_STRING_MODE, V, K, D, X, A.REGEXP_MODE];
        F.contains = E.concat({
            begin: /\{/,
            end: /\}/,
            keywords: I,
            contains: ["self"].concat(E)
        });
        let z = [].concat(C, F.contains),
            w = z.concat([{
                begin: /\(/,
                end: /\)/,
                keywords: I,
                contains: ["self"].concat(z)
            }]),
            N = {
                className: "params",
                begin: /\(/,
                end: /\)/,
                excludeBegin: !0,
                excludeEnd: !0,
                keywords: I,
                contains: w
            };
        return {
            name: "Javascript",
            aliases: ["js", "jsx", "mjs", "cjs"],
            keywords: I,
            exports: {
                PARAMS_CONTAINS: w
            },
            illegal: /#(?![$_A-z])/,
            contains: [A.SHEBANG({
                label: "shebang",
                binary: "node",
                relevance: 5
            }), {
                label: "use_strict",
                className: "meta",
                relevance: 10,
                begin: /^\s*['"]use (strict|asm)['"]/
            }, A.APOS_STRING_MODE, A.QUOTE_STRING_MODE, V, K, D, C, X, {
                begin: rH1(/[{,\n]\s*/, ed0(rH1(/(((\/\/.*$)|(\/\*(\*[^/]|[^*])*\*\/))\s*)*/, "[A-Za-z$_][0-9A-Za-z$_]*\\s*:"))),
                relevance: 0,
                contains: [{
                    className: "attr",
                    begin: "[A-Za-z$_][0-9A-Za-z$_]*" + ed0("\\s*:"),
                    relevance: 0
                }]
            }, {
                begin: "(" + A.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
                keywords: "return throw case",
                contains: [C, A.REGEXP_MODE, {
                    className: "function",
                    begin: "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + A.UNDERSCORE_IDENT_RE + ")\\s*=>",
                    returnBegin: !0,
                    end: "\\s*=>",
                    contains: [{
                        className: "params",
                        variants: [{
                            begin: A.UNDERSCORE_IDENT_RE,
                            relevance: 0
                        }, {
                            className: null,
                            begin: /\(\s*\)/,
                            skip: !0
                        }, {
                            begin: /\(/,
                            end: /\)/,
                            excludeBegin: !0,
                            excludeEnd: !0,
                            keywords: I,
                            contains: w
                        }]
                    }]
                }, {
                    begin: /,/,
                    relevance: 0
                }, {
                    className: "",
                    begin: /\s/,
                    end: /\s*/,
                    skip: !0
                }, {
                    variants: [{
                        begin: G.begin,
                        end: G.end
                    }, {
                        begin: Z.begin,
                        "on:begin": Z.isTrulyOpeningTag,
                        end: Z.end
                    }],
                    subLanguage: "xml",
                    contains: [{
                        begin: Z.begin,
                        end: Z.end,
                        skip: !0,
                        contains: ["self"]
                    }]
                }],
                relevance: 0
            }, {
                className: "function",
                beginKeywords: "function",
                end: /[{;]/,
                excludeEnd: !0,
                keywords: I,
                contains: ["self", A.inherit(A.TITLE_MODE, {
                    begin: "[A-Za-z$_][0-9A-Za-z$_]*"
                }), N],
                illegal: /%/
            }, {
                beginKeywords: "while if switch catch for"
            }, {
                className: "function",
                begin: A.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
                returnBegin: !0,
                contains: [N, A.inherit(A.TITLE_MODE, {
                    begin: "[A-Za-z$_][0-9A-Za-z$_]*"
                })]
            }, {
                variants: [{
                    begin: "\\.[A-Za-z$_][0-9A-Za-z$_]*"
                }, {
                    begin: "\\$[A-Za-z$_][0-9A-Za-z$_]*"
                }],
                relevance: 0
            }, {
                className: "class",
                beginKeywords: "class",
                end: /[{;=]/,
                excludeEnd: !0,
                illegal: /[:"[\]]/,
                contains: [{
                    beginKeywords: "extends"
                }, A.UNDERSCORE_TITLE_MODE]
            }, {
                begin: /\b(?=constructor)/,
                end: /[{;]/,
                excludeEnd: !0,
                contains: [A.inherit(A.TITLE_MODE, {
                    begin: "[A-Za-z$_][0-9A-Za-z$_]*"
                }), "self", N]
            }, {
                begin: "(get|set)\\s+(?=[A-Za-z$_][0-9A-Za-z$_]*\\()",
                end: /\{/,
                keywords: "get set",
                contains: [A.inherit(A.TITLE_MODE, {
                    begin: "[A-Za-z$_][0-9A-Za-z$_]*"
                }), {
                    begin: /\(\)/
                }, N]
            }, {
                begin: /\$[(.]/
            }]
        }
    }

    function E84(A) {
        let B = {
                beginKeywords: "namespace",
                end: /\{/,
                excludeEnd: !0
            },
            G = {
                beginKeywords: "interface",
                end: /\{/,
                excludeEnd: !0,
                keywords: "interface extends"
            },
            Z = {
                className: "meta",
                relevance: 10,
                begin: /^\s*['"]use strict['"]/
            },
            I = ["any", "void", "number", "boolean", "string", "object", "never", "enum"],
            Y = ["type", "namespace", "typedef", "interface", "public", "private", "protected", "implements", "declare", "abstract", "readonly"],
            J = {
                $pattern: "[A-Za-z$_][0-9A-Za-z$_]*",
                keyword: Ac0.concat(Y),
                literal: Qc0,
                built_in: Bc0.concat(I)
            },
            W = {
                className: "meta",
                begin: "@[A-Za-z$_][0-9A-Za-z$_]*"
            },
            X = (K, D, H) => {
                let C = K.contains.findIndex((E) => E.label === D);
                if (C === -1) throw Error("can not find mode to replace");
                K.contains.splice(C, 1, H)
            },
            F = C84(A);
        Object.assign(F.keywords, J), F.exports.PARAMS_CONTAINS.push(W), F.contains = F.contains.concat([W, B, G]), X(F, "shebang", A.SHEBANG()), X(F, "use_strict", Z);
        let V = F.contains.find((K) => K.className === "function");
        return V.relevance = 0, Object.assign(F, {
            name: "TypeScript",
            aliases: ["ts", "tsx"]
        }), F
    }
    Gc0.exports = E84
});
var Yc0 = U((d87, Ic0) => {
    function z84(A) {
        return {
            name: "Vala",
            keywords: {
                keyword: "char uchar unichar int uint long ulong short ushort int8 int16 int32 int64 uint8 uint16 uint32 uint64 float double bool struct enum string void weak unowned owned async signal static abstract interface override virtual delegate if while do for foreach else switch case break default return try catch public private protected internal using new this get set const stdout stdin stderr var",
                built_in: "DBus GLib CCode Gee Object Gtk Posix",
                literal: "false true null"
            },
            contains: [{
                className: "class",
                beginKeywords: "class interface namespace",
                end: /\{/,
                excludeEnd: !0,
                illegal: "[^,:\\n\\s\\.]",
                contains: [A.UNDERSCORE_TITLE_MODE]
            }, A.C_LINE_COMMENT_MODE, A.C_BLOCK_COMMENT_MODE, {
                className: "string",
                begin: '"""',
                end: '"""',
                relevance: 5
            }, A.APOS_STRING_MODE, A.QUOTE_STRING_MODE, A.C_NUMBER_MODE, {
                className: "meta",
                begin: "^#",
                end: "$",
                relevance: 2
            }]
        }
    }
    Ic0.exports = z84
});
var Xc0 = U((c87, Wc0) => {
    function Jc0(A) {
        if (!A) return null;
        if (typeof A === "string") return A;
        return A.source
    }

    function xxA(...A) {
        return A.map((B) => Jc0(B)).join("")
    }

    function oH1(...A) {
        return "(" + A.map((B) => Jc0(B)).join("|") + ")"
    }

    function U84(A) {
        let Q = {
                className: "string",
                begin: /"(""|[^/n])"C\b/
            },
            B = {
                className: "string",
                begin: /"/,
                end: /"/,
                illegal: /\n/,
                contains: [{
                    begin: /""/
                }]
            },
            G = /\d{1,2}\/\d{1,2}\/\d{4}/,
            Z = /\d{4}-\d{1,2}-\d{1,2}/,
            I = /(\d|1[012])(:\d+){0,2} *(AM|PM)/,
            Y = /\d{1,2}(:\d{1,2}){1,2}/,
            J = {
                className: "literal",
                variants: [{
                    begin: xxA(/# */, oH1(Z, G), / *#/)
                }, {
                    begin: xxA(/# */, Y, / *#/)
                }, {
                    begin: xxA(/# */, I, / *#/)
                }, {
                    begin: xxA(/# */, oH1(Z, G), / +/, oH1(I, Y), / *#/)
                }]
            },
            W = {
                className: "number",
                relevance: 0,
                variants: [{
                    begin: /\b\d[\d_]*((\.[\d_]+(E[+-]?[\d_]+)?)|(E[+-]?[\d_]+))[RFD@!#]?/
                }, {
                    begin: /\b\d[\d_]*((U?[SIL])|[%&])?/
                }, {
                    begin: /&H[\dA-F_]+((U?[SIL])|[%&])?/
                }, {
                    begin: /&O[0-7_]+((U?[SIL])|[%&])?/
                }, {
                    begin: /&B[01_]+((U?[SIL])|[%&])?/
                }]
            },
            X = {
                className: "label",
                begin: /^\w+:/
            },
            F = A.COMMENT(/'''/, /$/, {
                contains: [{
                    className: "doctag",
                    begin: /<\/?/,
                    end: />/
                }]
            }),
            V = A.COMMENT(null, /$/, {
                variants: [{
                    begin: /'/
                }, {
                    begin: /([\t ]|^)REM(?=\s)/
                }]
            });
        return {
            name: "Visual Basic .NET",
            aliases: ["vb"],
            case_insensitive: !0,
            classNameAliases: {
                label: "symbol"
            },
            keywords: {
                keyword: "addhandler alias aggregate ansi as async assembly auto binary by byref byval call case catch class compare const continue custom declare default delegate dim distinct do each equals else elseif end enum erase error event exit explicit finally for friend from function get global goto group handles if implements imports in inherits interface into iterator join key let lib loop me mid module mustinherit mustoverride mybase myclass namespace narrowing new next notinheritable notoverridable of off on operator option optional order overloads overridable overrides paramarray partial preserve private property protected public raiseevent readonly redim removehandler resume return select set shadows shared skip static step stop structure strict sub synclock take text then throw to try unicode until using when where while widening with withevents writeonly yield",
                built_in: "addressof and andalso await directcast gettype getxmlnamespace is isfalse isnot istrue like mod nameof new not or orelse trycast typeof xor cbool cbyte cchar cdate cdbl cdec cint clng cobj csbyte cshort csng cstr cuint culng cushort",
                type: "boolean byte char date decimal double integer long object sbyte short single string uinteger ulong ushort",
                literal: "true false nothing"
            },
            illegal: "//|\\{|\\}|endif|gosub|variant|wend|^\\$ ",
            contains: [Q, B, J, W, X, F, V, {
                className: "meta",
                begin: /[\t ]*#(const|disable|else|elseif|enable|end|externalsource|if|region)\b/,
                end: /$/,
                keywords: {
                    "meta-keyword": "const disable else elseif enable end externalsource if region then"
                },
                contains: [V]
            }]
        }
    }
    Wc0.exports = U84
});
var Kc0 = U((p87, Vc0) => {
    function Fc0(A) {
        if (!A) return null;
        if (typeof A === "string") return A;
        return A.source
    }

    function $84(...A) {
        return A.map((B) => Fc0(B)).join("")
    }

    function w84(...A) {
        return "(" + A.map((B) => Fc0(B)).join("|") + ")"
    }

    function q84(A) {
        let Q = "lcase month vartype instrrev ubound setlocale getobject rgb getref string weekdayname rnd dateadd monthname now day minute isarray cbool round formatcurrency conversions csng timevalue second year space abs clng timeserial fixs len asc isempty maths dateserial atn timer isobject filter weekday datevalue ccur isdate instr datediff formatdatetime replace isnull right sgn array snumeric log cdbl hex chr lbound msgbox ucase getlocale cos cdate cbyte rtrim join hour oct typename trim strcomp int createobject loadpicture tan formatnumber mid split  cint sin datepart ltrim sqr time derived eval date formatpercent exp inputbox left ascw chrw regexp cstr err".split(" "),
            B = ["server", "response", "request", "scriptengine", "scriptenginebuildversion", "scriptengineminorversion", "scriptenginemajorversion"],
            G = {
                begin: $84(w84(...Q), "\\s*\\("),
                relevance: 0,
                keywords: {
                    built_in: Q
                }
            };
        return {
            name: "VBScript",
            aliases: ["vbs"],
            case_insensitive: !0,
            keywords: {
                keyword: "call class const dim do loop erase execute executeglobal exit for each next function if then else on error option explicit new private property let get public randomize redim rem select case set stop sub while wend with end to elseif is or xor and not class_initialize class_terminate default preserve in me byval byref step resume goto",
                built_in: B,
                literal: "true false null nothing empty"
            },
            illegal: "//",
            contains: [G, A.inherit(A.QUOTE_STRING_MODE, {
                contains: [{
                    begin: '""'
                }]
            }), A.COMMENT(/'/, /$/, {
                relevance: 0
            }), A.C_NUMBER_MODE]
        }
    }
    Vc0.exports = q84
});
var Hc0 = U((l87, Dc0) => {
    function N84(A) {
        return {
            name: "VBScript in HTML",
            subLanguage: "xml",
            contains: [{
                begin: "<%",
                end: "%>",
                subLanguage: "vbscript"
            }]
        }
    }