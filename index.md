---
---
{% include section.html size="full" %}

{%
  include hero.html
  eyebrow="University of Sydney · Robotics, Learning & Control"
  title="Computational methods for curious robots"
  text="We develop rigorous mathematical, algorithmic, and optimization methods for robotic learning and control. Led by [Dr. Ian Abraham](members/ian-abraham)."
  link="#latest-work"
  link-text="See our latest work"
  link2="contact"
  link2-text="Join the lab"
%}

{% include section.html %}

## Latest Work

New papers and preprints from the lab. The full list lives on our [publications page](research).

{% include latest-papers.html count=6 %}

{%
  include button.html
  link="research"
  text="All publications"
  icon="fa-solid fa-arrow-right"
  flip=true
  style="outline"
%}

{% include section.html %}

## Research Areas

{% capture text %}

Robots increasingly learn from pixels and act through contact, in state spaces far too large for classical solvers. We build fast, structure-exploiting numerical methods, from parallel differentiable simulation and sampling-based model predictive control to operator-theoretic models, that make learning and adaptation tractable in real time.

<c>Current Research Topic Areas</c>
- Visual policy learning through parallel differentiable simulation and sampling-based control ([NeurIPS 2025](https://arxiv.org/abs/2505.10646), [preprint](https://arxiv.org/abs/2605.26478), [preprint](https://arxiv.org/abs/2609.20575))
- Optimal switching between hybrid and non-differentiable control modes ([ICRA 2026](https://arxiv.org/abs/2510.19074))
- Koopman operator models for learning and control ([T-RO 2026](https://doi.org/10.1109/TRO.2026.3654384))
- Informative contact data for manipulation learning ([RSS 2025](https://arxiv.org/abs/2505.12214), [preprint](https://arxiv.org/abs/2510.18137))

{% endcapture %}

{%
  include feature.html
  image="images/research/g1-carry-vision.webp"
  video="images/research/g1-carry-vision.mp4"
  link="research"
  title="Numerical Methods for Adaptive, High-Dimensional Learning and Control"
  text=text
%}

{% capture text %}

Flow fields, smoke, and vast or irregular spaces are where robots are most useful and most likely to fail. We develop ergodic search and coverage methods with optimality guarantees that scale from a single room to global monitoring, and that hold up when sensing is limited and time is short.

<c>Current Research Topic Areas</c>
- Asymptotically optimal coverage over flow-induced motion fields ([RSS 2026](https://arxiv.org/abs/2605.13442))
- Scale-agnostic and infinite-horizon ergodic search ([ICRA 2026](https://arxiv.org/abs/2512.05229), [preprint](https://arxiv.org/abs/2604.01023))
- Time-optimal search and retrieval ([preprint](https://arxiv.org/abs/2610.21823))
- Exploration over complex surfaces and under time-varying visibility ([ICRA 2025](https://arxiv.org/abs/2503.05026), [ICRA 2025](https://arxiv.org/abs/2503.04998))

{% endcapture %}

{%
  include feature.html
  image="images/papers/2512.05229.webp"
  link="research"
  title="Decision Making under Extreme Conditions"
  flip=true
  fit="contain"
  text=text
%}

{% capture text %}

When models are uncertain and decisions are spread across many particles, agents, or contact modes, optimization has to be parallel by design and robust by construction. We develop Stein-variational, distributed, and dual-control methods that hedge against uncertainty while still acting decisively.

<c>Current Research Topic Areas</c>
- Distributionally robust and uncertainty-adaptive control via Stein variational inference ([RSS 2026](https://arxiv.org/abs/2605.19029), [preprint](https://arxiv.org/abs/2604.01034))
- Distributed optimization for discovering diverse contact-rich strategies ([preprint](https://arxiv.org/abs/2609.28299))
- Parallel, diverse multi-agent search ([NeurIPS 2025](https://doi.org/10.52202/085713-2482))
- Dual control for acting under parametric uncertainty ([preprint](https://arxiv.org/abs/2510.20483))

{% endcapture %}

{%
  include feature.html
  image="images/papers/2605.19029.webp"
  link="research"
  title="Distributed Optimization and Robust Control"
  fit="contain"
  text=text
%}

{% include section.html %}

## We are recruiting!

Those interested in joining our [group](members) are expected to have strong competency in programming, optimization, systems and control theory, kinematics and dynamics of robotic systems, and rigorous mathematical theory and proof writing. Candidates should have a strong curiosity and drive to develop algorithms and deploy them on physical robots to expand the capabilities, analyze their performance, and prove reliability through mathematical rigor and repeated experimentation. 

Other useful skills: 

- ROS 1/2 or LCM experience 
- Extensive Python and C/C++ coding experience
- Exposure to modern ML/AI autodiff libraries like JAX/PyTorch
- Excellent speaking/writing abilities

If this sounds like you then please submit an [expression of interest (EOI)](https://www.sydney.edu.au/engineering/study/postgraduate-research.html) via this [form](https://sydney.au1.qualtrics.com/jfe/form/SV_e8xuYF3XBRZ97Zs).
Make sure to list Dr. Ian Abraham, School of Electrical and Computer Engineering as a potential advisor if possible. 

