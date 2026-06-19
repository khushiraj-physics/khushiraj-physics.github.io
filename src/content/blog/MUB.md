---
title: "Understanding Mutually Unbiased Bases: Introduction"
description: "An introduction to mutually unbiased bases and their significance in quantum information theory."
pubDate: "Jun 13 2026"
---

## 1. Introduction
<br>
Our senses do not have the intuition to visualize the quantum world as we do in the classical world, since it describes extremely small things. The only way we can understand them is by using mathematical abstractions. A d-level quantum system is mathematically described by a state that resides in a d-dimensional <span class="define-term" data-def="A Hilbert space H is a vector space equipped with an inner product ⟨·,·⟩ that is a complete metric space under the induced norm: ‖x‖ = √(⟨x,x⟩). This means every Cauchy sequence of vectors in H converges to a limit that also belongs to H.">Hilbert Space</span>
.
<br><br>
In the classical world, the quantities used to describe a system (such as position and momentum) are the same quantities that are directly measured. But, in the quantum world, states and measurements are two different things. A quantum state encodes all information about the system, while a measurement extracts only a particular aspect of that information. The information depends on the basis of measurement chosen; different bases provide different perspectives on the same state.
<br><br>

The most general description of such a state is given by a $d \times d$ density matrix $\rho$, which is Hermitian, positive semidefinite, and satisfies $\text{Tr}(\rho) = 1$. A general $d \times d$ complex matrix contains $2d^2$ real parameters. If we apply the hermiticity condition ($\rho_{ij} = \rho_{ji}^*$) in it, we find that diagonal elements (i = j) must be real, which gives $d$ real numbers, and off-diagonal elements occur in complex conjugate pairs, so each pair contributes only 2 real parameters, which gives $2 \times \binom{d}{2}$ real numbers, and applying the trace condition removes one parameter. So, to determine a quantum state, we need <span class="define-term" data-def="2d² - (d² - d) - d - 1 = d² - 1">d² - 1</span> real numbers for its complete specification.
<br><br>
An orthogonal quantum measurement performed on such a system has d possible outcomes, providing (d - 1) independent probabilities (since the probabilities must sum to 1). Therefore, to completely determine a quantum state, we need at least (d + 1) different independent orthogonal measurements. However, not every set of (d + 1) measurements is equally useful. Ideally, the measurements should be as different from one another as possible so that each provides new information about the quantum state. This leads to the concept of mutually unbiased bases (MUBs), which form an optimal set of measurements for quantum state determination. If the outcome of a measurement in one MUB is known with certainty, then all outcomes of a measurement in any unbiased basis are equally likely because measurements in mutually unbiased bases are maximally incompatible.
<br><br>
Ivanovic first introduced the concept of MUB in the context of quantum state determination, and later Wootters and Fields showed that measurements in MUB provide the minimal as well as optimal way of complete specification of the density matrix. Optimality means minimization of statistical errors in the measurements. By explicit construction, they showed the existence of complete sets of MUBs in prime-power dimensions and proved that for any dimension $p^k$, there can be at most $p^k + 1$ MUB.
<br><br>
## 2. <span class="define-term" data-def="Let the system be prepared in state |φᵢ⟩ from basis ℬ₁, and measured in ℬ₂. For these to be mutually unbiased, each outcome must be equally likely. Therefore: P(ψ₁|φᵢ) = P(ψ₂|φᵢ) = ... = p. Since all probabilities must sum to 1, we know that ΣP(ψ_j|φᵢ) = 1. This means dp = 1, which gives us the final result: p = 1/d.">Definition</span>
<br>

Let $\mathcal{B}_1 = \{|\phi_1\rangle, \dots, |\phi_d\rangle\}$ and $\mathcal{B}_2 = \{|\psi_1\rangle, \dots, |\psi_d\rangle\}$ be two orthonormal bases in the $d$-dimensional state space. They are said to be **mutually unbiased bases (MUB)** if and only if $$\left|\langle\phi_i | \psi_j\rangle\right| = \frac{1}{\sqrt{d}}$$ for every $i, j = 1, \dots, d$. A set $\{\mathcal{B}_1, \dots, \mathcal{B}_m\}$ of orthonormal bases in $\mathbb{C}^d$ is called a <i>set of mutually unbiased bases</i> (a set of MUB) if each pair of bases $\mathcal{B}_i$ and $\mathcal{B}_j$ are mutually unbiased.
<br><br>

## 3. Applications and Importance of MUBs
<br>
One of the most important applications of MUB is in quantum state tomography, where the goal is to reconstruct an unknown quantum state from measurement outcomes. A complete set of (d + 1) mutually unbiased bases, whenever it exists, provides an optimal way of obtaining the information required for this task.
<br><br>
MUBs also play an important role in quantum cryptography, where it has been demonstrated that using higher-dimensional quantum systems for key distribution has possible advantages over qubits. Mutually unbiased bases play a key role in such a key distribution scheme. The explicit construction of the MUB observables can turn out to be crucial in the application of MUB in quantum cryptography with systems with more than two states. They are further connected to fundamental concepts such as quantum complementarity and uncertainty, since complete knowledge of the outcome in one basis implies maximal uncertainty in every unbiased basis.
<br><br>
Apart from their practical applications, MUBs appear in several foundational problems of quantum mechanics, most notably the Mean King Problem, and have deep connections with areas of mathematics such as finite geometry and finite fields.
<br><br>

## 4. Open Problems and Further Exploration
<br>
In this article, we saw why the concept of MUB comes into picture and its importance in Quantum Information Theory research. The existence of MUB for other composite dimensions which are not powers of a prime still remains an open problem. In the upcoming articles, we will explore the construction of MUB in dimensions which are prime and prime powers. Further, we will explore why the known constructions of MUBs work naturally in prime-power dimensions and why extending them to general composite dimensions remains difficult.
<br><br>

## 5. References
<br>

**1.** S. Bandyopadhyay, P. O. Boykin, V. Roychowdhury and F. Vatan, *"A new proof for the existence of mutually unbiased bases,"* 7 Sept. 2001.
<br>
**2.** I. D. Ivanovic, *"Geometrical description of quantum state determination,"* *Journal of Physics A*, 1981.
<br>
**3.** W. K. Wooters and B. D. Fields, *"Optimal state-determination by mutually unbiased measurements,"* *Annals of Physics*, 1989.