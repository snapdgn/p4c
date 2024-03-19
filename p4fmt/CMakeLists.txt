set(FMT_SRCS
    p4fmt.cpp
    )

add_executable(p4fmt ${FMT_SRCS})
target_link_libraries(p4fmt ${P4C_LIBRARIES} ${P4C_LIB_DEPS})
add_dependencies(p4fmt frontend)
