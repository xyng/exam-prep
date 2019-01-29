import Topic from "./Topic"

const topics = [
    new Topic(
        "Ameisenalgorithmus",
        require('./md/ameisen.md'),
    ),
    new Topic(
        "Bellman Ford",
        require('./md/bellman-ford.md'),
    ),
    new Topic(
        "Binäres Rucksackproblem Dynamisch",
        require('./md/binary-knapsack-dynamic.md'),
    ),
    new Topic(
        "Branch & Bound",
        require('./md/branch-bound.md'),
    ),
    new Topic(
        "Gegeben einen Knoten- und Katenkonsistener Graph mit jeweils 3 Elementen in den Domänen. Gibt es eine Lösung?",
        require('./md/consistent-graph-solution.md'),
    ),
    new Topic(
        "Constraint Programming",
        require('./md/constraint-programming.md'),
    ),
    new Topic(
        "Dynamische Programmierung",
        require('./md/dynamic-programming.md'),
    ),
    new Topic(
        "Floyd",
        require('./md/floyd.md'),
    ),
    new Topic(
        "genetic",
        require('./md/genetic.md'),
    ),
    new Topic(
        "Eröffnungsverfahren",
        require('./md/heuristic-opening.md'),
    ),
    new Topic(
        "Nachbarschaften",
        require('./md/neighbourhoods.md'),
    ),
    new Topic(
        "TSP Branch & Bound",
        require('./md/tsp-branch.md'),
    ),
    new Topic(
        "TSP Dynamische Programmierung",
        require('./md/tsp-dynamic.md'),
    ),
    new Topic(
        "Verbesserungsverfahren",
        require('./md/verbesserungsverfahren.md'),
    ),
    new Topic(
        "Probleme",
        require('./md/probleme.md'),
    ),
]

export default topics

