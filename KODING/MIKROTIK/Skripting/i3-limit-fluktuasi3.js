/ip hotspot user
add name=UserA profile=ProfileA
/ip hotspot user scheduler
add name=ScheduleA trigger=uptime action=change-profile profile=ProfileB
