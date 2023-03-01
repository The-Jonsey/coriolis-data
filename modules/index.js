module.exports = {
  standard: {
    pp: require('./standard/power_plant').pp,
    t: require('./standard/thrusters').t,
    fsd: require('./standard/frame_shift_drive').fsd,
    ls: require('./standard/life_support').ls,
    pd: require('./standard/power_distributor').pd,
    s: require('./standard/sensors').s,
    ft: require('./standard/fuel_tank').ft,
    pas: require('./standard/planetary_approach_suite').pas
  },
  hardpoints: {
    pl: require('./hardpoints/pulse_laser').pl,
    ul: require('./hardpoints/burst_laser').ul,
    bl: require('./hardpoints/beam_laser').bl,
    mc: require('./hardpoints/multi_cannon').mc,
    axmc: require('./hardpoints/ax_multi_cannon').axmc,
    c: require('./hardpoints/cannon').c,
    fc: require('./hardpoints/fragment_cannon').fc,
    rfl: require('./hardpoints/remote_release_flak_launcher.json').rfl,
    rg: require('./hardpoints/rail_gun').rg,
    pa: require('./hardpoints/plasma_accelerator').pa,
    mr: require('./hardpoints/missile_rack').mr,
    axmr: require('./hardpoints/ax_missile_rack').axmr,
    tp: require('./hardpoints/torpedo_pylon').tp,
    nl: require('./hardpoints/mine_launcher').nl,
    ml: require('./hardpoints/mining_laser').ml,
    cs: require('./hardpoints/cargo_scanner').cs,
    ws: require('./hardpoints/frame_shift_wake_scanner').ws,
    pwa: require('./hardpoints/pulse_wave_analyser').pwa,
    abl: require('./hardpoints/abrasion_blaster').abl,
    scl: require('./hardpoints/seismic_charge_launcher').scl,
    kw: require('./hardpoints/kill_warrant_scanner').kw,
    sb: require('./hardpoints/shield_booster').sb,
    ch: require('./hardpoints/chaff_launcher').ch,
    ec: require('./hardpoints/electronic_countermeasure').ec,
    hs: require('./hardpoints/heat_sink_launcher').hs,
    po: require('./hardpoints/point_defence').po,
    gpc: require('./hardpoints/guardian_plasma_charger').gpc,
    ggc: require('./hardpoints/guardian_gauss_cannon').ggc,
    sfn: require('./hardpoints/shutdown_field_neutraliser').sfn,
    sdm: require('./hardpoints/sub_surface_displacement_missile.json').sdm,
    xs: require('./hardpoints/xeno_scanner').xs,
    tbsc: require('./hardpoints/shock_cannon').tbsc,
    tbem: require('./hardpoints/enzyme_missile_rack.json').tbem,
    tbrfl: require('./hardpoints/remote_release_flechette_launcher.json').tbrfl,
    gsc: require('./hardpoints/guardian_shard_cannon').gsc
  },
  internal: {
    am: require('./internal/auto_field_maintenance_unit').am,
    bsg: require('./internal/bi_weave_shield_generator').bsg,
    cr: require('./internal/cargo_rack').cr,
    cc: require('./internal/collector_limpet_controllers').cc,
    dc: require('./internal/docking_computer').dc,
    dtl: require('./internal/decontamination_limpet_controller.json').dtl,
    fh: require('./internal/fighter_hangar').fh,
    fi: require('./internal/frame_shift_drive_interdictor').fi,
    fs: require('./internal/fuel_scoop').fs,
    ft: require('./internal/internal_fuel_tank').ft,
    fx: require('./internal/fuel_transfer_limpet_controllers').fx,
    hb: require('./internal/hatch_breaker_limpet_controller').hb,
    hr: require('./internal/hull_reinforcement_package').hr,
    mahr: require('./internal/meta_alloy_hull_reinforcement_package.json').mahr,
	mlc: require('./internal/multi_limpet_controllers.json').mlc,
    mrp: require('./internal/module_reinforcement_package').mrp,
    pv: require('./internal/planetary_vehicle_hanger').pv,
    psg: require('./internal/pristmatic_shield_generator').psg,
    pc: require('./internal/prospector_limpet_controllers').pc,
    pce: require('./internal/economy_passenger_cabin').pce,
    pci: require('./internal/business_passenger_cabin').pci,
    pcm: require('./internal/first_passenger_cabin').pcm,
    pcq: require('./internal/luxury_passenger_cabin').pcq,
    rf: require('./internal/refinery').rf,
    scb: require('./internal/shield_cell_bank').scb,
    sg: require('./internal/shield_generator').sg,
    ss: require('./internal/surface_scanner').ss,
    rpl: require('./internal/repair_limpet_controller').rpl,
    rcpl: require('./internal/recon_limpet_controllers').rcpl,
    rsl: require('./internal/research_limpet_controller.json').rsl,
    gsrp: require('./internal/guardian_shield_reinforcement_package').gsrp,
    gfsb: require('./internal/guardian_fsd_booster').gfsb,
    ghrp: require('./internal/guardian_hull_reinforcement_package').ghrp,
    gmrp: require('./internal/guardian_module_reinforcement_package').gmrp,
    sua: require('./internal/supercruise_assist').sua,
    exws: require('./internal/experimental_weapon_stabiliser.json').exws
  }
}
